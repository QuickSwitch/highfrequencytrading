<?php
	header("Access-Control-Allow-Origin: *");


	$ch = curl_init();
	curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	curl_setopt($ch, CURLOPT_URL,"https://api-public.sandbox.gdax.com/products/");
	$result = curl_exec($ch);
	curl_close($ch);
	
	//echo '{"result"['.$result;
	echo $result;
	

?>