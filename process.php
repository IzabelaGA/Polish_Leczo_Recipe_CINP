<?php
$to = 'izabela.sosnowska23@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['text'];
$subject= 'CINP ' . $name . ' (' . $subject .')';
$message = $_POST['message'];
// $headers = 'From: ' . $name'' . ' (' . $email .')';
$headers = 'From: ' . $_POST['email'] . "\r\n" .
$headers .= 'Content-type: text/html; charset=utf-8\r\n';

mail($to, $subject, $message, $headers);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16">
    <script src="https://kit.fontawesome.com/2fe14bc8b9.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="contact.css">
    <title>Vegetable and Polish Sausage Stew | Cook In Polish</title>
</head>

<body>
    <nav id="navbar">
        <ul>
            <li><a href="http://cookinpolish.com/" class="logo btn" title="View all recipes at Cook In Polish" target="_blank">CookInPolish</a>
            </li>
        </ul>
        <ul>
            <li><a href="index.html" class="en btn current" title="Here You Are">En</a></li>
            <li><a href="indexes.html" class="es btn" title="Go to Spanish version">Es</a></li>
        </ul>

    </nav>



    <header id="main-header" class="contact">
        <div class="contact-form">
            <div class="text">
                <h1>Your message is sent</h1>
                <a href="index.html" class="btn">Go back to our site</a>
            </div>

            

    <footer id="main-footer">
        <p>Designed&copy; 2019 by
            <a href="https://github.com/IzabelaGA" target="_blank" title="View my Github">IzabelaGa <i class="fab fa-github"></i></a>
            All Rights Reserved</p>

        <p>View more recipes at
            <a href="http://cookinpolish.com/" target="_blank" title="View all recipes from Cook In Polish">Cook In Polish</a>
        </p>
        <p><a href="https://www.izabelasosnowska.pl/#contact" target="_blank" title="Click and feel free fill the form">ContactMe</a>
        </p>

    </footer>
    <!-- JQuery CDN-->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="main.js"></script>
</body>

</html>