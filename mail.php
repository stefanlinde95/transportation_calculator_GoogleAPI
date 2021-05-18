<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];
$qnt = $_POST['valitud_qnt'];
$time = $_POST['time'];
$chosen_date = $_POST['kpv'];
$adress = $_POST['tarne'];
$price = $_POST['price'];
$price2 = $_POST['priceKm'];
$material = $_POST['valitud_material'];
$client = $_POST['valitud_client'];
$company = $_POST['companyname'];
$adressinfo = $_POST['tarneinfo'];

$material = preg_replace('/\s+/', '', $material);
$time = preg_replace('/\s+/', '', $time);
$client = preg_replace('/\s+/', '', $client);
$link = "https://www.google.com/maps/search/?api=1&query=";
$adressquery = $adress;
$adressquery = str_replace(' ', '', $adressquery);
$linktomap = $link . $adressquery;

$content=" name: $name \n Phone: $subject \n\n Material: $material \n Qnt: $qnt T \n\n Time: $time \n Date: $chosen_date \n Adress: $adress \n $adressinfo \n\n $price \n$price2 \n\n Client: $client \n $company \n $linktomap";
$recipient = "your@email.com;
$mailheader = "From: $name \r\n";
$title = "Order";
mail($recipient, $title, $content, $mailheader) or die("Error!");

?>


<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <title>Success</title>
        <meta name="description" content="Some info ">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/styles.css">
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet"> 
        <link rel="stylesheet" href="assets/css/bootstrap-datepicker.standalone.css">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div class="container" style="text-align: center; margin-top: 100px;">
            
            <div class="row">
                <div class="col-12">
                    <img src="/assets/img/Logo2.png" width="200px">
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h2>Success!</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <p>For more information contact us!</p>
                    <br>
                    <br>
                    <div class="row">
                        <div class="col-12" style="text-align: center;">
                        <button class="btn btn-warning" style="margin:auto;margin-bottom:25px;"><a href="index.html" style="color:black;text-decoration: none;">HOME/a></button>
                    
                        <button class="btn btn-warning" style="margin:auto;margin-bottom:25px;"><a href="/*" style="color:black;text-decoration: none;">NEW DELIVERY</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="" async defer></script>
    </body>
</html>