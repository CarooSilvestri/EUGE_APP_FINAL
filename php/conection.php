<?php

header("Access-Control-Allow-Origin: *");

// Conexión a base de datos
$connection_db = mysqli_connect("localhost","root","","app");

// Error de conexión
if (mysqli_connect_errno()) {
   echo "Fallo en conectar a base de datos: " . mysqli_connect_error();
   exit();
}

?>