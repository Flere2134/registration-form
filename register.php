<?php
// Include database connection
require_once 'config.php';

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize and validate inputs
    $username = filter_input(INPUT_POST, 'regUsername', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email-add', FILTER_SANITIZE_EMAIL);
    $password = $_POST['regPassword']; // We don't sanitize passwords
    $reenter_password = $_POST['confirmPassword']; // We don't sanitize passwords
    
    // Personal information
    $first_name = filter_input(INPUT_POST, 'firstName', FILTER_SANITIZE_STRING);
    $last_name = filter_input(INPUT_POST, 'lastName', FILTER_SANITIZE_STRING);
    $middle_name = filter_input(INPUT_POST, 'middleName', FILTER_SANITIZE_STRING);
    $suffix = filter_input(INPUT_POST, 'suffix', FILTER_SANITIZE_STRING);
    
    // Contact information
    $phone_number = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    
    // Address information
    $region = filter_input(INPUT_POST, 'region', FILTER_SANITIZE_STRING);
    $province = filter_input(INPUT_POST, 'province', FILTER_SANITIZE_STRING);
    $city = filter_input(INPUT_POST, 'city', FILTER_SANITIZE_STRING);
    $barangay = filter_input(INPUT_POST, 'barangay', FILTER_SANITIZE_STRING);
    $zip_code = filter_input(INPUT_POST, 'zip', FILTER_SANITIZE_STRING);
    $street_name = filter_input(INPUT_POST, 'street', FILTER_SANITIZE_STRING);
    $house_building_no = filter_input(INPUT_POST, 'building', FILTER_SANITIZE_STRING);
    
    // Validate required fields
    if (empty($username) || empty($email) || empty($password) || empty($first_name) || 
    empty($last_name) || empty($phone_number) || empty($region) || empty($province) || 
    empty($city) || empty($barangay) || empty($zip_code) || empty($street_name) || 
    empty($house_building_no)) {
        header("Location: register.html?error=Please fill in all required fields");
        exit();
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: register.html?error=Invalid email format");
        exit();
    }
    
    // Check if passwords match
    if ($password !== $reenter_password) {
        header("Location: register.html?error=Passwords do not match");
        exit();
    }
    
    // Validate password length
    if (strlen($password) < 6) {
        header("Location: register.html?error=Password must be at least 6 characters long");
        exit();
    }
    
    try {
        // Check if username already exists
        $stmt = $conn->prepare("SELECT username FROM users WHERE username = :username");
        $stmt->bindParam(':username', $username);
        $stmt->execute();
        
        if ($stmt->rowCount() > 0) {
            header("Location: register.html?error=Username already exists");
            exit();
        }
        
        // Check if email already exists
        $stmt = $conn->prepare("SELECT email FROM users WHERE email = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        
        if ($stmt->rowCount() > 0) {
            header("Location: register.html?error=Email already exists");
            exit();
        }
        
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        
        // Prepare SQL and bind parameters
        $stmt = $conn->prepare("INSERT INTO users (username, password, email, first_name, last_name, 
                              middle_name, suffix, phone_number, contact_no, region, province, 
                              city, barangay, zip_code, street_name, house_building_no) 
                              VALUES (:username, :password, :email, :first_name, :last_name, 
                              :middle_name, :suffix, :phone_number, :contact_no, :region, :province, 
                              :city, :barangay, :zip_code, :street_name, :house_building_no)");
        
        // Bind parameters
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $hashed_password);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':first_name', $first_name);
        $stmt->bindParam(':last_name', $last_name);
        $stmt->bindParam(':middle_name', $middle_name);
        $stmt->bindParam(':suffix', $suffix);
        $stmt->bindParam(':phone_number', $phone_number);
        $stmt->bindParam(':contact_no', $contact_no);
        $stmt->bindParam(':region', $region);
        $stmt->bindParam(':province', $province);
        $stmt->bindParam(':city', $city);
        $stmt->bindParam(':barangay', $barangay);
        $stmt->bindParam(':zip_code', $zip_code);
        $stmt->bindParam(':street_name', $street_name);
        $stmt->bindParam(':house_building_no', $house_building_no);
        
        // Execute the statement
        $stmt->execute();
        
        // Redirect to success page or login page
        header("Location: index.html?success=Account created successfully. Please login.");
        exit();
        
    } catch(PDOException $e) {
        die("Error: " . $e->getMessage());
        header("Location: register.html?error=Registration failed: " . $e->getMessage());
        exit();
    }
} else {
    // Not a POST request
    header("Location: register.html");
    exit();
}
?>