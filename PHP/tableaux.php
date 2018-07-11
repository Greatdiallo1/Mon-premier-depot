<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>tableaux</title>
</head>
<body>
<?php
$activites = array("Lundi"=>"Php","Mardi"=>"Javascript", "Mercredi"=>"Typescript","Jeudi"=>"Angular","Vendredi"=>"SQL","Samedi"=>"Python","Dimanche"=>"Tout");
var_dump ($activites) ;
//deux dimensions
$pierre = array("1"=>"Php","2"=>"Javascript","3"=>"Python");
$paul = array("1"=>"Javascript","2"=>"Css","3"=>"Php");
$jacques = array("1"=>"Java","2"=>"Php","3"=>"Javascript");
 $preferences = array("pierre"=>"$pierre","paul"=>"$paul","jacques"=>"$jacques");
$my = "Moi";
var_dump($activites . $pierre . $paul . $jacques . $preferences);


foreach ($pierre as $key => $val) {
    echo "<p>" . $key . " : " . $val . "</p>";
    }


foreach ($paul as $key => $val) {
    echo "<p>" . $key . " : " . $val . "</p>";
    }

foreach ($jacques as $key => $val) {
echo "<p>" . $key . " : " . $val . "</p>";
}
 ?>
</body>
</html>