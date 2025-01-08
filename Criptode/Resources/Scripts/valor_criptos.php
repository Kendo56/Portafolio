<?php
// Función que calcula el precio de una criptomoneda y lo guarda en una base de datos
function obtenerPrecio($symbol) {
    // URL del API para obtener el precio de una criptomoneda
    $url = "https://api.binance.com/api/v3/ticker/price?symbol=$symbol";
    $data = file_get_contents($url);
    $json = json_decode($data, true);

    // Comprobamos si la API devolvió datos válidos
    if (isset($json['price'])) {
        $precio = floatval($json['price']);
        echo "<p>El precio de $symbol es de $$precio </p>";
    } else {
        echo "<p>No se pudo obtener el precio de $symbol.</p>";
    }
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

    $sql = "INSERT INTO criptos (symbol, precio) VALUES (:symbol, :precio)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':symbol', $symbol);
    $stmt->bindParam(':precio', $precio);
    $stmt->execute();
}

// Tomar el valor ingresado por el usuario
/*$Cripto = $_POST ['cryptoname'];*/ //asi lo hise al principio
$Cripto = isset($_POST['cryptoName']) ? strtoupper(trim($_POST['cryptoName'])) : ''; //Esta opcion es mas valida que la de arriba

setcookie(
    "Cripto", 
    $Cripto,
    time() + 84600,
    ); //Cookies

if (in_array($Cripto, ["ETHUSDT", "BTCUSDT", "LTCUSDT", "BNBBTC", 
        "NEOBTC", "QTUMETH", "EOSETH", "SNTETH", "BNTETH", "WTCETH", "LRCBTC",
        "BCCBTC", "GASBTC", "BNBETH", "HSRBTC", "OAXETH", "DNTETH", "MCOETH", 
        "ICNETH", "MCOBTC", "WTCBTC", "LRCETH", "QTUMBTC", "YOYOBTC", "OMGBTC", 
        "OMGETH", "ZRXBTC", "ZRXETH", "STRATBTC", "STRATETH", "SNGLSBTC", "SNGLSETH",
        "BQXBTC", "BQXETH", "KNCBTC", "KNCETH", "FUNBTC", "FUNETH", "SNMBTC", 
        "SNMETH", "NEOETH", "IOTABTC", "IOTAETH", "LINKBTC", "LINKETH", "XVGBTC", "XVGETH"])){
            obtenerPrecio($Cripto); //Si el usuario ingresa uno de los simbolos del array, se llamara a la funcion, con la cripto que selecciono
        }else{
            echo "<script>alert('Criptomoneda no válida. Por favor, ingrese un símbolo válido) (Ej: ETHUSDT, BTCUSDT, LTCUSDT');</script>";
        }
?>