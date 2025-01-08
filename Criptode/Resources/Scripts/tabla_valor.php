<?php
function obtenerPrecios() {
    // URL del API para obtener todos los precios
    $url = "https://api.binance.com/api/v3/ticker/price";
    $data = file_get_contents($url);
    $json = json_decode($data, true);

    // Generar el HTML para la tabla
    echo "<h1>Precio actual de criptomonedas</h1><br>";
    echo "<table border='1'>";
    echo "<tr><th>Criptomoneda</th><th>Precio (USD)</th></tr>";

    // Iterar sobre los datos y mostrar cada símbolo y precio
    foreach ($json as $cripto) {
        echo "<tr>";
        echo "<td>{$cripto['symbol']}</td>";
        echo "<td>$" . number_format($cripto['price'], 2) . "</td>";  // Formateamos el precio a 2 decimales
        echo "</tr>";
    }

    echo "</table>";
}

// Llamar a la función
obtenerPrecios();
?>
