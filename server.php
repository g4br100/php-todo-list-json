<?php
    $result = file_get_contents('db.json');
    $phpDecode = json_decode($result);
    header('Content_Type: application/json');
    $jsonEncode = json_encode($phpDecode);
    echo $jsonEncode;
    file_put_contents('db.json', $jsonEncode);
