<?php
function monitoreo($symbol, $tiempo) {
    $url = "https://api.binance.com/api/v3/ticker/price?symbol=$symbol";
    $data = file_get_contents($url);
    $json = json_decode($data, true);
    $precio_inicial = floatval($json['price']);
    echo "El precio actual de $symbol es: " . $precio_inicial. "<br>";
    //Despues de 5 segundos
    sleep($tiempo);
    //Se vuelve a pedir los datos
    $data = file_get_contents($url);
    $json = json_decode($data, true);
    //El precio se alamacena en una nueva varibale
    $precio_nuevo = floatval($json['price']);
    echo "El precio actualizado de $symbol despues de $tiempo segundos es: " . $precio_nuevo. "<br>";

    if ($precio_nuevo > $precio_inicial){
        echo "El precio de $symbol ha subido. ";
    }elseif ($precio_nuevo < $precio_inicial){
        echo "EL precio de $symbol ha bajado. ";
    }else{
        echo "El precio de $symbol no a cambiado";
    }
}
$Tiempo = $_POST['time'];
$criptomoneda = $_POST['crypto'];

//Cookies
    setcookie("Criptomoneda_monitoreada", 
    $criptomoneda, 
    time() + 84600
    );

    setcookie("tiempo_monitoreado", 
    $Tiempo, 
    time() + 84600
    );

if ($Tiempo >= 5 && $Tiempo <= 100 && !empty($criptomoneda)) {
    // Validación del tipo de criptomoneda y tiempo
    if (in_array($criptomoneda, ["ETHUSDT", "BTCUSDT", "LTCUSDT", "BNBBTC", 
        "NEOBTC", "QTUMETH", "EOSETH", "SNTETH", "BNTETH", "WTCETH", "LRCBTC",
        "BCCBTC", "GASBTC", "BNBETH", "HSRBTC", "OAXETH", "DNTETH", "MCOETH", 
        "ICNETH", "MCOBTC", "WTCBTC", "LRCETH", "QTUMBTC", "YOYOBTC", "OMGBTC", 
        "OMGETH", "ZRXBTC", "ZRXETH", "STRATBTC", "STRATETH", "SNGLSBTC", "SNGLSETH",
        "BQXBTC", "BQXETH", "KNCBTC", "KNCETH", "FUNBTC", "FUNETH", "SNMBTC", 
        "SNMETH", "NEOETH", "IOTABTC", "IOTAETH", "LINKBTC", "LINKETH", "XVGBTC", "XVGETH"])) {  // Si el usuario ingresa una de los symbolos guardados en este array, se llamara a la funcion y le monitorearea
        monitoreo($criptomoneda, $Tiempo);
    } else {
        echo "<script>alert('Criptomoneda no válida. Por favor, ingrese un símbolo válido) (Ej: ETHUSDT, BTCUSDT, LTCUSDT');</script>";
    }
} else {
    echo "<script>alert('Tiempo inválido o criptomoneda no proporcionada. Por favor, ingrese valores válidos');</script>";
}
?>