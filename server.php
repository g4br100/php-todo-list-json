<?php
    $result = file_get_contents('db.json');
    $phpDecode = json_decode($result);
    if(isset($_POST['newOne'])){
        $newTask = [
            'message' => $_POST['newOne'],
            'flag' => false
        ];
        $phpDecode[] = $newTask;
        file_put_contents('db.json', json_encode($phpDecode));
    }

    if (isset($_POST['indexToDelete'])) {
        $index = $_POST['indexToDelete'];
        array_splice($phpDecode, $index , 1);

        file_put_contents('db.json', json_encode($phpDecode));
    }

    header('Content_Type: application/json');

    $jsonEncode = json_encode($phpDecode);

    echo $jsonEncode;

    file_put_contents('db.json', $jsonEncode);