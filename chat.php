<?php
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$message = $_POST['message'];
$msg = "Hey Josh!\r\n\r\n"
    . $fullname . " is interested in working with you! "
    . "Here's what they said:\r\n\r\n" . wordwrap($message, 70, "\r\n") . "\r\n\r\n"
    . "If you would like to work with them, you can reach them at their email: "
    . $email . ".\r\n\r\nHave a fantastic day!\njoshuapensky.com";

mail("hello@joshuapensky.com", $fullname . " wants to work with you!", $msg);
?>
