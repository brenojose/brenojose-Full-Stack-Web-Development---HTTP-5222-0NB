<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Database connection
$servername = "sql211.infinityfree.com";
$username = "if0_37030252";
$password = "webdev24";
$dbname = "if0_37030252_portfolio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch projects
$sql = "SELECT project_name, project_thumbnail, project_url, project_description, project_languages FROM projects";
$result = $conn->query($sql);

$projects = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $projects[] = $row;
    }
    echo json_encode($projects);
} else {
    echo json_encode(["message" => "No projects found"]);
}

$conn->close();
?>
