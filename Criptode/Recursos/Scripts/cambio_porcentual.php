<?php
//6
function CambioPorcentual24hr($symbol){
    //Funcion que permite obtener el cambio porcentual de una cripto, y decir si el cambio fue positivo o negativo
    $url = "https://api.binance.com/api/v3/ticker/24hr?symbol=$symbol";  // endpoint pero con 24hr, para obtener el cambio en 24hr, en vez del precio que es price
    $data = file_get_contents($url);
    $json = json_decode($data, true);
    $precioPorcentual = floatval($json['priceChangePercent']); //Ya no se hace uso del price corriente, sino del priceChangePercent para extraer el  cambio en 24 horas

    //Estructuras de control

    if ($precioPorcentual > 0){
        echo "El cambio en 24 horas para $symbol es positivo: +$precioPorcentual%";
    } else {
        echo "El cambio en 24 horas para $symbol es negativo: $precioPorcentual%";
    }
}
//Cookie
    $Cripto = $_POST['crypto1'];
    setcookie("Criptomoneda_porcentual", 
    $Cripto, 
    time() + 84600
    ); 

if (in_array($Cripto, ["ETHUSDT", "BTCUSDT", "LTCUSDT", "BNBBTC", 
        "NEOBTC", "QTUMETH", "EOSETH", "SNTETH", "BNTETH", "WTCETH", "LRCBTC",
        "BCCBTC", "GASBTC", "BNBETH", "HSRBTC", "OAXETH", "DNTETH", "MCOETH", 
        "ICNETH", "MCOBTC", "WTCBTC", "LRCETH", "QTUMBTC", "YOYOBTC", "OMGBTC", 
        "OMGETH", "ZRXBTC", "ZRXETH", "STRATBTC", "STRATETH", "SNGLSBTC", "SNGLSETH",
        "BQXBTC", "BQXETH", "KNCBTC", "KNCETH", "FUNBTC", "FUNETH", "SNMBTC", 
        "SNMETH", "NEOETH", "IOTABTC", "IOTAETH", "LINKBTC", "LINKETH", "XVGBTC", "XVGETH"])){
            CambioPorcentual24hr($Cripto);
        }else{
            echo "<script>alert('Criptomoneda no válida. Por favor, ingrese un símbolo válido) (Ej: ETHUSDT, BTCUSDT, LTCUSDT');</script>";
        }
?>