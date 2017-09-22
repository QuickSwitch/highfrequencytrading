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
	
	 $result;



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
	
	  $result2;
	

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
	
	 $result3;

	
	

	

?>   


<?php
	
	$chh = curl_init();

	curl_setopt($chh, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($chh, CURLOPT_RETURNTRANSFER, true);
	if(!empty($_GET['gmarket']))
	{

		$url="https://api.bitfinex.com/v1/pubticker/".$_GET['gmarket'];
	curl_setopt($chh, CURLOPT_URL,$url);
}

	$result4 = curl_exec($chh);
	curl_close($chh);
	
	 $result4;

	
	

	

?>



<?php

$resultd=json_decode($result);
$result2d=json_decode($result2);
$result3d=json_decode($result3);
$result4d=json_decode($result4);


$bitbid='';
$gbid='';



$bitbid=!empty($result2d->result->Bid)?$result2d->result->Bid:'0';

$gbid=!empty($resultd->bid)?$resultd->bid:'0';
$gembid=!empty($result3d->bid)?$result3d->bid:'0';
$bitfinex=!empty($result4d->bid)?$result4d->bid:'0';




$oldFigure = !empty($gbid)?$gbid:'0';
$newFigure = !empty($bitbid)?$bitbid:'0';


$newFigure2 = !empty($gembid)?$gembid:'0';

$newFigure3 = !empty($bitfinex)?$bitfinex:'0';
 
$percentChange = (1 - $newFigure / $oldFigure) * 100;
 
$percentChange=round($percentChange,'2');


$percentChange2 = (1 - $newFigure2 / $newFigure) * 100;

 $percentChange2=round($percentChange2,'2');



$percentChange3 = (1 - $newFigure3 / $newFigure2) * 100;




 $percentChange3=round($percentChange3,'2');





$post_data = json_encode(array('bittrexbid' => $bitbid,'gdaxbid'=>$gbid,'percentChange'=>$percentChange,'gembid'=>$gembid,'bitfinexbid'=>$bitfinex,'percentChange2'=>$percentChange2,'percentChange3'=>$percentChange3), JSON_FORCE_OBJECT);



echo $post_data;


?>