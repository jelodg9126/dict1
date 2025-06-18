<?php

$servername = 'localhost';
$username = 'root';
$password = '';//Server pw
$dbname = 'dbname';//Server name 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // If connection fails, output an error message
    die("Connection failed: " . $conn->connect_error);
}

// If connection is successful
echo "Connected successfully";

?>