<?php
$fullname = trim($_POST['fullname']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);

if ($fullname != "" && $email != "" && $message != "") {
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
}

/**
 * Checks if the given name is a full name. A valid full name should have at least two words
 * separated by a space (at least first and last).
 *
 * @param string $fullname   the name to be checked
 * @return boolean true if the name contains at least the first and last, false otherwise
 */
function checkFullName($fullname) {
    $name_size = count(explode(" ", $fullname));
    if ($name_size >= 2) {
        return true;
    }
    return false;
}

/**
 * Checks if the given email is valid. A valid email should have an @ sign separating the
 * username and service, and the service should have at least one period to indicate domain
 * extension (".com", ".io", etc.).
 *
 * @param string $email   the email address to be checked
 * @return boolean true if the email is valid, false otherwise
 */
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

/**
 * Creates a message and sends it to my e-mail, only after confirming the given name and
 * email are valid.
 */
function sendMessage() {
    global $fullname, $email, $message;
    $msg = "Hey Josh!\r\n\r\n"
        . $fullname . " is interested in working with you! "
        . "Here's what they said:\r\n\r\n" . wordwrap($message, 70, "\r\n") . "\r\n\r\n"
        . "If you would like to work with them, you can reach them at their email: " . $email
        . ".\r\n\r\nHave a fantastic day!\r\njoshuapensky.com";
    mail("hello@joshuapensky.com", $fullname . " wants to work with you!", $msg);
}
?>
