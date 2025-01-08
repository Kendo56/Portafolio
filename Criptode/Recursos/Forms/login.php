<?php
// Inicia la sesión
session_start();

$conn = new mysqli('localhost', 'root', '', 'registros');
// Verifica la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtiene los datos del formulario
$email = $_POST['email'] ?? '';
$clave = $_POST['clave'] ?? '';

// Verifica las credenciales en la base de datos
$query = "SELECT * FROM usuarios WHERE email = '$email' AND clave = '$clave'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    // Credenciales correctas, inicia sesión
    $_SESSION['email'] = $email;
    // Redirige al contenido principal que es el dashboard
    header("Location: ../fields/dashboard.html");
    exit();
} else {
    // Si no encuentra uno de los dos en la base de datos, entonces le dara este mensaje
    echo ";<script>alert('Email o contraseña incorrectos.');</script>";
}
// Cierra la conexión
$conn->close();
?>
