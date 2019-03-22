<html>
<head>
<title>Форма заявки с сайта</title>
</head>
<body>
<?php
//проверяем, существуют ли переменные в массиве POST
if(!isset($_POST['name']) and !isset($_POST['email'])){
 ?> <form action="send.php" method="post">
<input type="text" name="name" placeholder="Name" required>
<input type="text" name="email" placeholder="Email" required>
<input type="submit" value="Отправить">
</form>

<?php
} else {
 //показываем форму
 $name = $_POST['name'];
 $email = $_POST['email'];
 $name = htmlspecialchars($name);
 $email = htmlspecialchars($email);
 $name = urldecode($name);
 $email = urldecode($email);
 $name = trim($name);
 $email = trim($email);
 if (mail("aalisenak@gmail.com", "Заявка с сайта", "Name:".$name.". Email: ".$email ,"From: example2@mail.ru \r\n")){
 echo "Сообщение успешно отправлено";
 } else {
 echo "При отправке сообщения возникли ошибки";
 }
}
?>
</body>
</html>