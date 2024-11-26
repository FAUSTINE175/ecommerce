<?php
header('Content-Type: application/json');
$servername = "localhost"; // Your database server
$username = "root"; // Your database username
$password = "2004"; // Your database password
$dbname = "freebandz"; // Your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle POST requests for both login and signup
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    // Check if it's a signup request
    if (isset($data['username'])) {
        $username = $data['username'];
        $email = $data['email'];
        $password = password_hash($data['password'], PASSWORD_DEFAULT);
        $referral_code = uniqid(); // Generate a unique referral code
        $referred_by = isset($data['referred_by']) ? $data['referred_by'] : null;

        // Check if email already exists
        $checkEmailSql = "SELECT * FROM users WHERE email = '$email'";
        $result = $conn->query($checkEmailSql);

        if ($result->num_rows > 0) {
            echo json_encode(['message' => 'Email already exists.']);
        } else {
            $sql = "INSERT INTO users (username, email, password, referral_code, referred_by) VALUES ('$username', '$email', '$password', '$referral_code', '$referred_by')";

            if ($conn->query($sql) === TRUE) {
                echo json_encode(['message' => 'User  created successfully!', 'referral_code' => $referral_code]);
            } else {
                echo json_encode(['message' => 'Error: ' . $conn->error]);
            }
        }
    } 
    // Check if it's a login request
    else if (isset($data['email']) && isset($data['password'])) {
        $email = $data['email'];
        $password = $data['password'];

        // Fetch user from the database
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            // Verify password
            if (password_verify($password, $user['password'])) {
                echo json_encode(['message' => 'Login successful!', 'user' => $user]);
            } else {
                echo json_encode(['message' => 'Invalid email or password.']);
            }
        } else {
            echo json_encode(['message' => 'Invalid email or password.']);
        }
    } else {
        echo json_encode(['message' => 'Invalid request.']);
    }
}

$conn->close();
?>