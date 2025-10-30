<?php
$tags = explode(";", $_GET['tags']);
$sql = "SELECT * FROM distros WHERE ";
$conds = [];
foreach ($tags as $tag) {
    $tag = trim($tag);
    // use LIKE for simple match
    $conds[] = "tags LIKE '%" . $tag . "%'";
}
$sql .= implode(' AND ', $conds);
echo $sql;
?>