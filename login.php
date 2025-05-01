<?php
// Initialize session
session_start();

// Include database connection
require_once 'config.php';

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Validate and sanitize input
    $username = filter_input(INPUT_POST, 'loginUsername', FILTER_SANITIZE_STRING);
    $password = $_POST['loginPassword']; // We don't sanitize passwords
    
    // Basic validation
    if (empty($username) || empty($password)) {
        header("Location: index.html?error=Please fill in all fields");
        exit();
    }
    
    try {
        // Prepare a statement to check if user exists
        $stmt = $conn->prepare("SELECT id, username, password FROM users WHERE username = :username");
        $stmt->bindParam(':username', $username);
        $stmt->execute();
        
        // Check if user exists
        if ($stmt->rowCount() > 0) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            
            // Verify password
            if (password_verify($password, $user['password'])) {
                // Password is correct, start a new session
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];
                
                // Redirect to dashboard or welcome page
                // For this simple app, we'll just show a success message
                echo "<!DOCTYPE html>
                <html>
                <head>
                    <meta charset='UTF-8'>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                    <title>Welcome</title>
                    <link rel='stylesheet' href='styles.css'>
                </head>
                <body>
                    <div class='container'>
                        <h1>Welcome, " . htmlspecialchars($user['username']) . "!</h1>
                        <p>You have successfully logged in.</p>
                        <div class='form-footer'>
                            <button><a href='logout.php' class='logout-button'>Logout</a></button>
                        </div>
                    </div>
                </body>
                </html>";
                exit();
            } else {
                // Password is incorrect
                header("Location: index.html?error=Invalid username or password");
                exit();
            }
        } else {
            // User does not exist
            header("Location: index.html?error=Invalid username or password");
            exit();
        }
    } catch(PDOException $e) {
        header("Location: index.html?error=Database error: " . $e->getMessage());
        exit();
    }
} else {
    // Not a POST request
    header("Location: index.html");
    exit();
}
?>