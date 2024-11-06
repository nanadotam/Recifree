<?php
// Database configuration
$host = 'localhost';
$dbname = 'recipe_sharing'; 
$username = 'root'; 
$password = ''; 

// Create a new connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
