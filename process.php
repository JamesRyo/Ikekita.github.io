<?php

$statusMsg = '';
$msgClass = '';
if(isset($_POST['submit'])){
    // Get the submitted form data
    $email = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];
    
    // Cek apakah ada data yang belum diisi
    ini_set( 'display_errors', 1 );   
    error_reporting( E_ALL );    
    $to = "udidesign3r@gmail.com";    
    $subject = "Checking PHP mail";     
    $headers = "From:" . $email;    
    mail($to,$subject,$message, $headers);    
    echo "Pesan email sudah terkirim.";
}

?>