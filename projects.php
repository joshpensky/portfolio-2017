<?php
if ($file = fopen("projects.json", "r")) {
    while(!feof($file)) {
        $line = fgets($file);
        echo $line;
    }
    fclose($file);
}
?>
