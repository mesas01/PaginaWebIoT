<?php
include 'db_connect.php'; // Incluye el archivo de conexión a la base de datos

// Recoge los datos del formulario de registro
$username = $_POST['username'];
$password = $_POST['password'];
$password_hash = password_hash($password, PASSWORD_DEFAULT); // Encripta la contraseña

// Prepara la sentencia SQL para evitar inyecciones SQL
$stmt = $conn->prepare("INSERT INTO usuarios (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $password_hash);

// Ejecuta la sentencia y verifica si fue exitosa
if ($stmt->execute()) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
