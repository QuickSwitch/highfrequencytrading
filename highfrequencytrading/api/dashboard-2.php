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
	
	echo 'GDAX BTC DATA='. $result.'<br>';



?>   





<?php
	
	$chh = curl_init();

	curl_setopt($chh, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($chh, CURLOPT_RETURNTRANSFER, true);
	if(!empty($_GET['market']))
	{

		$url="https://bittrex.com/api/v1.1/public/getticker?market=".$_GET['market'];
	curl_setopt($chh, CURLOPT_URL,$url);
}

	$result2 = curl_exec($chh);
	curl_close($chh);
	
	  echo 'Bittrex BTC DATA='. $result2.'<br>';	

?> 


<?php
	
	$chh = curl_init();

	curl_setopt($chh, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($chh, CURLOPT_RETURNTRANSFER, true);
	if(!empty($_GET['gmarket']))
	{

		$url="https://api.gemini.com/v1/pubticker/".$_GET['gmarket'];
	curl_setopt($chh, CURLOPT_URL,$url);
}

	$result3 = curl_exec($chh);
	curl_close($chh);
	
	 echo 'Gemini BTC DATA='. $result3.'<br>';

	
	
exit;
	

?>   



<?php

$resultd=json_decode($result);
$result2d=json_decode($result2);
$result3d=json_decode($result3);

$bitbid='';
$gbid='';



$bitbid=!empty($result2d->result->Ask)?$result2d->result->Ask:'0';

$gbid=!empty($resultd->ask)?$resultd->ask:'0';
$gembid=!empty($result3d->ask)?$result3d->ask:'0';




$oldFigure = !empty($gbid)?$gbid:'0';
$newFigure = !empty($bitbid)?$bitbid:'0';


$newFigure2 = !empty($gembid)?$gembid:'0';
 
$percentChange = (1 - $newFigure / $oldFigure) * 100;
 
$percentChange=round($percentChange,'2');


$percentChange2 = (1 - $newFigure2 / $newFigure) * 100;




 $percentChange2=round($percentChange2,'2');





$post_data = json_encode(array('bittrexbid' => $bitbid,'gdaxbid'=>$gbid,'percentChange'=>$percentChange,'gembid'=>$gembid,'percentChange2'=>$percentChange2), JSON_FORCE_OBJECT);



echo $post_data;


?>