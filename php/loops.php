

<?php
$colors=array("red", "black","whitee");
foreach($colors as &$x)
    {
        if($x=='black')
            $x="pink";

    }
var_dump($colors);
?>
