<?php
$a = 22;
$b = &$a;

$b = 57;

echo $a; 
echo $b; 
?>