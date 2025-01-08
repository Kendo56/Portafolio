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

// Código para inserción en la base de datos:
// Nombre de la Base de datos es: 
// Nombre de la tabla: 


// Función para insertar datos en la base de datos
function insertarUsuario($pdo,$nombre, $apellido, $email, $clave) {
    try {
        $sql = "INSERT INTO usuarios (nombre, apellido, email, clave) VALUES (:nombre, :apellido, :email, :clave)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':apellido', $apellido);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':clave', $clave);

        if ($stmt->execute()) {
            echo "Registro exitoso.";
        } else {
            echo "Error al registrar los datos.";
        }
    } catch (PDOException $e) {
        echo "Error en la inserción de datos: " . $e->getMessage();
    }
}
//Toma de datos en el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre= htmlspecialchars(trim($_POST['nombre']));
    $apellido= htmlspecialchars(trim($_POST['apellido']));
    $email= htmlspecialchars(trim($_POST['email']));
    $clave = htmlspecialchars(trim($_POST['clave']));
    // Verificar si el email ya existe
    
    $sql_check = "SELECT COUNT(*) FROM usuarios WHERE email = :email";
    $stmt_check = $pdo->prepare($sql_check);
    $stmt_check->bindParam(':email', $email);
    $stmt_check->execute();
    $count = $stmt_check->fetchColumn(); // Verifica la cantidad de registros con el mismo email

    // Si ya existe, mostrar mensaje de error
    if ($count > 0) {
        echo "<script>alert('Error: El email $email ya se encuentra registrado.')</script>";
        return; // Salir de la función si el email ya está registrado
    }else{
        insertarUsuario($pdo, $nombre, $apellido, $email, $clave);
    }  
}
?>