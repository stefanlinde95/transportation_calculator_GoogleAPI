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

$material = preg_replace('/\s+/', '', $material);
$time = preg_replace('/\s+/', '', $time);
$client = preg_replace('/\s+/', '', $client);

$content=" name: $name \n Telefon: $subject \n\n material: $material \n qnt: $qnt T \n\n time: $time \n Kuupäev: $chosen_date \n adress: $adress \n\n $price \n$price2 \n\n Tellib: $client \n $company";

$content = '<html><body>';
$content .= '<strong>name: </strong>' $name;
$content .= '</body></html>';


$recipient = "info@devstep.ee";
$mailheader = "From: $name \r\n";
$title = "Tellimus kodulehelt";
mail($recipient, $title, $content, $mailheader) or die("Error!");
echo "Tellimus saadetud!";

?>