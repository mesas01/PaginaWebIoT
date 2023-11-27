<?php
$servername = "localhost"; // o la dirección del servidor de la base de datos de 000webhost
$username = "id21375861_mesas01"; // tu nombre de usuario de la base de datos
$password = "1hywx%Wq%Eev"; // tu contraseña de la base de datos
$dbname = "id21375861_santiago"; // el nombre de tu base de datos

// Intentar conexión con la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
