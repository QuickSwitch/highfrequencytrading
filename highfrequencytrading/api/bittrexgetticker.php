<?php
	header("Access-Control-Allow-Origin: *");
	$ch = curl_init();

	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	if(!empty($_GET['market']))
	{

		$url="https://bittrex.com/api/v1.1/public/getticker?market=".$_GET['market'];
	curl_setopt($ch, CURLOPT_URL,$url);
}

	$result = curl_exec($ch);
	curl_close($ch);
	
	echo $result;
	

?>   