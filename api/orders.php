<?php
header('Content-Type: application/json');
$servername = "localhost";
$username = "root";
$password = "2004";
$dbname = "freebandz";

$conn = new mysqli($servername, $username, $ password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle POST request to create an order
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $user_id = $data['user_id'];
    $product_id = $data['product_id'];
    $quantity = $data['quantity'];
    $total_price = $data['total_price'];

    $sql = "INSERT INTO orders (user_id, product_id, quantity, total_price) VALUES ('$user_id', '$product_id', '$quantity', '$total_price')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Order created successfully!']);
    } else {
        echo json_encode(['message' => 'Error: ' . $conn->error]);
    }
}

$conn->close();
?>