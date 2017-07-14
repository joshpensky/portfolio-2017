<?php
$fullname = trim($_POST['fullname']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);

if (checkFullName($fullname)) {
    if (checkEmail($email)) {
        sendMessage();
        echo 'true';
    } else {
        echo 'false email';
    }
} else {
    echo 'false fullname';
}

function checkFullName($fullname) {
    $name_size = count(explode(" ", $fullname));
    if ($name_size >= 2) {
        return true;
    }
    return false;
}

function checkEmail($email) {
    $address_arr = explode("@", $email);
    if (count($address_arr) == 2) {
        $service = explode(".", $address_arr[1]);
        if (count($service) > 1 && $service[1] != "") {
            return true;
        }
    }
    return false;
}

function sendMessage() {
    global $fullname, $email, $message;
    $msg = "Hey Josh!\r\n\r\n"
        . $fullname . " is interested in working with you! "
        . "Here's what they said:\r\n\r\n" . wordwrap($message, 70, "\r\n") . "\r\n\r\n"
        . "If you would like to work with them, you can reach them at their email: "
        . $email . ".\r\n\r\nHave a fantastic day!\njoshuapensky.com";
    mail("hello@joshuapensky.com", $fullname . " wants to work with you!", $msg);
}
?>
