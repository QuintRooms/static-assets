<?php
	require_once '../../vendor/autoload.php';

	$dotenv = Dotenv\Dotenv::createImmutable('../../');
	$dotenv->load();

	$dist_file = getenv('directory_Name') . '-' . getenv('site_id');
?>

