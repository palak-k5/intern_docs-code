<?php 
function operation($num,$operation)
{
    return $operation($num);
}

$doublee =function($n)
{
    return $n*2;
};

$addnum=fn($n)=> $n+5;

function multiply($x)
{
    return function($n) use ($x)
    {
        return $n * $x;
    };
}

$triple =multiply(44);

echo operation(10, $doublee);   
echo "<br>";

echo operation(10, $addnum);  
echo "<br>";

echo operation(10, $triple);   

?>