<?php
//connect to database
$servername="localhost";
$username="root";
$password="";
$dbname="docstracker";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("ERROR: Could not connect". $conn->connect_error);
        
}

//setting time zone
date_default_timezone_set('Asia/Manila');

// take values from html form
if($_SERVER["REQUEST_METHOD"]=="POST"){

$fName = $_POST["fNameIn"];
$lName = $_POST["lNameIn"];
$fType = $_POST["fTypeIn"];
$modeD = $_POST["mODIn"];
$dateReceived = date('m/d/Y h:i:s a', time());

//inserting data to database table
$sql = "INSERT INTO trackertable VALUES('', '$fName','$lName', '$fType', '$modeD','$dateReceived')";

//connection check
if(mysqli_query($conn, $sql)){
    echo "<h3> Data Stored Succesfully";
    echo nl2br("\n$fName\n $lName\n $modeD\n $dateReceived\n");
}
else{
    echo "";
}
}
?>