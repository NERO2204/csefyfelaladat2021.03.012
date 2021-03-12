<?php

require  "./MySqlDB.php";

if ($_SERVER['REQVEST_METHOD']==="DELETE")
    {
    $mySql=new MySqlDB();
    $mySql->torol("telefonkonyvem","ID=".$_GET["ID"]);
}

 