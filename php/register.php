<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $conn->real_escape_string(trim($_POST['fname']));
    $lname = $conn->real_escape_string(trim($_POST['lname']));
    $email = $conn->real_escape_string(trim($_POST['email']));
    $password = $conn->real_escape_string($_POST['password']);

    // Validate required fields
    if (empty($fname) || empty($lname) || empty($email) || empty($password)) {
        header("Location: ../signup.html?error=All fields are required.");
        exit;
    }

    // Check if email already exists
    $query = "SELECT * FROM Users WHERE email = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        header("Location: ../signup.html?error=Email is already registered.");
        exit;
    }

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert new user with role = 2 (admin)
    $query = "INSERT INTO Users (fname, lname, email, password, role) VALUES (?, ?, ?, ?, 2)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssss", $fname, $lname, $email, $hashed_password);

    if ($stmt->execute()) {
        header("Location: ../login.html?success=Registration successful! Please log in.");
    } else {
        header("Location: ../signup.html?error=Registration failed. Try again.");
    }

    $stmt->close();
    $conn->close();
}
?>
