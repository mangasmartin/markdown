<?php
include("parsedown.php");

$data = file_get_contents("pagina.md");
$parser = new Parsedown();
echo $parser->text($data);
?>