<?php
	header("Access-Control-Allow-Origin: *");
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	//curl_setopt($ch, CURLOPT_URL,"https://bittrex.com/api/v1.1/public/getmarkets");
	//$result = curl_exec($ch);
	//curl_close($ch);
	
	//echo $result;*/
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
 //$apisecret='0e39118c1dd54d2d890f83b99a93c5e5';
$nonce=time();
$uri='https://bittrex.com/api/v1.1/market/getopenorders?apikey='.$apikey.'&nonce='.$nonce;
$sign=hash_hmac('sha512',$uri,$apisecret);
$ch = curl_init($uri);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('apisign:'.$sign));
$execResult = curl_exec($ch);
$obj = json_decode($execResult);

//echo $obj;
















?>