<?php
	header("Access-Control-Allow-Origin: *");
	$apikey='';
	$apisecret='';
	
	if(!empty($_GET['apikey']))
	{
		$apikey=$_GET['apikey'];
	}
	
	if(!empty($_GET['secret']))
	{
		$apisecret=$_GET['secret'];
	}
	$nonce=time();
	$uri='https://bittrex.com/api/v1.1/account/getorderhistory?apikey='.$apikey.'&nonce='.$nonce;
	$sign=hash_hmac('sha512',$uri,$apisecret);
	$ch = curl_init($uri);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('apisign:'.$sign));
	$execResult = curl_exec($ch);
	curl_close($ch);
	echo $execResult;

	
	
	
	
	
	
	
	








?>