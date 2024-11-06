<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html?error=Please log in first.");
    exit;
}

require 'db.php'; // Include your database connection

// Get user details from the session
$userName = htmlspecialchars($_SESSION['fname']);
$userRole = $_SESSION['role'] == 1 ? 'Super Admin' : 'Admin';

// Function to get total users
function getTotalUsers($conn) {
    $result = $conn->query("SELECT COUNT(*) AS total FROM Users");
    $row = $result->fetch_assoc();
    return $row['total'];
}

// Function to get total recipes
function getTotalRecipes($conn) {
    $result = $conn->query("SELECT COUNT(*) AS total FROM Foods");
    $row = $result->fetch_assoc();
    return $row['total'];
}

// Fetch data as needed
$totalUsers = getTotalUsers($conn);
$totalRecipes = getTotalRecipes($conn);

$conn->close(); // Close the database connection

// Include the HTML template
include './dashboard.html';

