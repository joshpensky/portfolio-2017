<?php
$works = json_decode(file_get_contents("../data/projects.json"));
$lim_works = array();
foreach ($works as $key => $work) {
    $work_lim{$key} = new StdClass;
    $work_lim{$key}->url = $work->url;
    $work_lim{$key}->title = $work->title;
    $work_lim{$key}->desc_short = $work->desc_short;
    $work_lim{$key}->categories = $work->categories;
    $work_lim{$key}->cover = $work->cover;
    $lim_works[] = $work_lim{$key};
}

echo json_encode($lim_works);
?>
