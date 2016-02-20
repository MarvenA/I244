<?php 
	$file = 'count.txt';

	$current = file_get_contents($file);
	$current = $current + 1;
	file_put_contents($file, $current);

	echo "Lehe külastuste arv on: " . $current;
?>
