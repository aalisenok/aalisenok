<?php
$name  = "Andrey"
$recepient = "aalisenak@gmail.com";
$sitename  = "sitename";
$subject   = "New message \"$sitename\"";
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$message = "E-mail: $email \nName: $name \nMessage: $message";
mail($recepient, $subject, $message, "From: $ame <$recepient>" . "\r\n" . "Reply-To: $recepient" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");

?>

