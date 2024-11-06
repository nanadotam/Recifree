<?php
session_start();
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $conn->real_escape_string(trim($_POST['username']));
    $password = $_POST['password'];

    // Server-side validation
    if (empty($username) || empty($password)) {
        header("Location: ../login.html?error=All fields are required.");
        exit;
    }

    // Retrieve user information by email (username)
    $query = "SELECT * FROM Users WHERE email = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if user exists and verify password
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            // Set session variables to track user_id, fname, lname, and role
            $_SESSION['user_id'] = $user['user_id'];
            $_SESSION['fname'] = $user['fname'];
            $_SESSION['lname'] = $user['lname'];
            $_SESSION['role'] = $user['role'];

            // Redirect based on user role
            if ($user['role'] == 1) {
                header("Location: dashboard.php?success=Welcome Super Admin!");
            } elseif ($user['role'] == 2) {
                header("Location: dashboard.php?success=Welcome Admin!");
            } else {
                // Redirect regular users to the home page
                header("Location: ../recipe_feed.html?success=Welcome to Recifree!");
            }
            exit;
        } else {
            header("Location: ../login.html?error=Invalid username or password.");
            exit;
        }
    } else {
        header("Location: ../login.html?error=Invalid username or password.");
        exit;
    }

    $stmt->close();
    $conn->close();
}
?>
