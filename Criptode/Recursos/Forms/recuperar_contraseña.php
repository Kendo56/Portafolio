<?php
// Configuración de conexión a la base de datos
$host = 'localhost';
$dbname = 'registros';
$usuario = 'root';
$contraseña = '';

try {
    // Crear una nueva conexión PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $usuario, $contraseña);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("¡Error en la conexión a la base de datos!: " . $e->getMessage());
}

function actualizarUsuario($pdo, $email, $clave) {
    try {
        $sql = "UPDATE usuarios SET clave = :clave WHERE email = :email"; //Quiere decir que actualizara la contraseña si el email es el correcto
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':clave', $clave);
        if ($stmt->execute()) {
            echo "Contraseña actualizada exitosamente.";
        } else {
            echo "Error al actualizar usuario.";
        }
    } catch (PDOException $e) {
        echo "Error al actualizar usuario: " . $e->getMessage();
    }
}

// Manejo de datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $cambiar_clave = $_POST['cambiar_clave'] ?? '';
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $clave = htmlspecialchars(trim($_POST['clave'] ?? ''));
    actualizarUsuario($pdo, $email, $clave); //Si todo va bien se llamara a la funcion y actualizara la contraseña
}
?>