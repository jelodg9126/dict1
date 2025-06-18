<?php
//connect to database
include "conn.php";

//setting time zone
date_default_timezone_set('Asia/Manila');

// take values from html form
if($_SERVER["REQUEST_METHOD"]=="POST"){

$fName = $_POST[""];
$lName = $_POST[""];
$modeD = $_POST[""];
$dateReceived = date('m/d/Y h:i:s a', time());

//inserting data to database table
$sql = "INSERT INTO tableName VALUES('$fName','$$lName','$$modeD','$$dateReceived')";

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