<?php
require 'db.php';

if ($conn) {
    echo "Database connection successful!";
} else {
    echo "Database connection failed.";
}

$conn->close();
?>
