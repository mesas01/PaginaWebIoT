<?php
include 'db_connect.php'; // Incluye el archivo de conexión a la base de datos

// Recoge los datos del formulario de inicio de sesión
$username = $_POST['username'];
$password = $_POST['password'];

// Prepara la sentencia SQL para evitar inyecciones SQL
$stmt = $conn->prepare("SELECT password FROM usuarios WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

// Verifica si el usuario existe y la contraseña es correcta
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo "Inicio de sesión exitoso";
    } else {
        echo "Contraseña incorrecta";
    }
} else {
    echo "El usuario no existe";
}

$stmt->close();
$conn->close();
?>
