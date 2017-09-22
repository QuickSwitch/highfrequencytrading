<?php
	header("Access-Control-Allow-Origin: *");
	$apikey='';
	$apisecret='';
	$currency='';
	if(!empty($_GET['apikey']))
	{
		$apikey=$_GET['apikey'];
	}
	
	if(!empty($_GET['secret']))
	{
		$apisecret=$_GET['secret'];
	}
	if(!empty($_GET['market']))
	{
		$currency=$_GET['market'];
	}
	$nonce=time();
	$uri='https://bittrex.com/api/v1.1/account/getopenorders?apikey='.$apikey.'&nonce='.$nonce.'&market='.$market;
	$sign=hash_hmac('sha512',$uri,$apisecret);
	$ch = curl_init($uri);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('apisign:'.$sign));
	$execResult = curl_exec($ch);
	curl_close($ch);
	echo $execResult;

	
	
	
	
	
	
	
	








?>