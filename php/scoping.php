<?php
$a = 12;
$b = 26;

function fun() {
    global $a, $b;

    $c = $a + $b;
    echo "Local sum: $c <br>";

    static $count = 0;
    $count++;
    echo "Function called: $count times <br>";

    $GLOBALS['b'] = $GLOBALS['a'] + $GLOBALS['b'];
}

fun();
fun();

echo "Updated global b: $b <br>";

$x = 5;
$y = &$x;
$y = 50;

echo "x = $x, y = $y <br>";

$name = "var";
$$name = "Dynamic Variable";

echo $var;

?>