<?php
function counter() {
    static $x = 0;
    echo $x;
    $x++;
}

counter(); 
counter(); 
counter(); 
?>