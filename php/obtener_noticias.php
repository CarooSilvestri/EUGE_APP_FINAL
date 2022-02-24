<?php 
include "conection.php";

$query = mysqli_query($connection_db, "SELECT * FROM `app_nacion_marvel`");
$ar = array();
while ($row = mysqli_fetch_array($query)) {

    array_push($ar, $row);
}

echo json_encode($ar);
?>