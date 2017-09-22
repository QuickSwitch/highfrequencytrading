<?php
	header("Access-Control-Allow-Origin: *");
	$ch = curl_init();

	curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	if(!empty($_GET['product']))
	{

		$url="https://api-public.sandbox.gdax.com/products/".$_GET['product']."/ticker";
	curl_setopt($ch, CURLOPT_URL,$url);
}

	$result = curl_exec($ch);
	curl_close($ch);
	
	echo $result;
	

?>   