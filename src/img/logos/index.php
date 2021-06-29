<?php
	$exclude = array('.', '..', 'index.php');
	$files = array_values(array_diff(scandir('.'), $exclude));
	$ret = array(
		'dir'	=> __DIR__,
		'files'	=> $files
	);
	header('Content-Type: application/json');
	echo json_encode($ret);
?>