<?php
	header("Access-Control-Allow-Origin: *");
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,"https://bittrex.com/api/v1.1/public/getmarkets");
	$result = curl_exec($ch);
	curl_close($ch);
	
	echo $result;
	

?>