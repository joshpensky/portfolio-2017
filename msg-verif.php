<?php
$fullname = $_POST['fullname'];
$email = $_POST['email'];

if (checkFullname($fullname)) {
    if (checkEmail($email)) {
        echo 'true';
    } else {
        echo 'false email';
    }
} else {
    echo 'false fullname';
}

function checkFullname($fullname) {
    $name_size = count(explode(" ", trim($fullname)));
    if ($name_size >= 2) {
        return true;
    }
    return false;
}

function checkEmail($email) {
    $address_arr = explode("@", trim($email));
    if (count($address_arr) == 2) {
        $service = explode(".", $address_arr[1]);
        if (count($service) > 1 && $service[1] != "") {
            return true;
        }
    }
    return false;
}
?>
