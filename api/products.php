<?php
header('Content-Type: application/json');
$servername = "localhost";
$username = "root";
$password = "2004";
$dbname = "freebandz";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle GET request to fetch products
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM products";
    $result = $conn->query($sql);
    $products = [];

    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }

    echo json_encode($products);
}

$conn->close();
?>