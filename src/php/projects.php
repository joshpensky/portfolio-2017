<?php
if ($file = fopen("../data/projects.json", "r")) {
    while(!feof($file)) {
        $line = fgets($file);
        echo $line;
    }
    fclose($file);
}
?>
