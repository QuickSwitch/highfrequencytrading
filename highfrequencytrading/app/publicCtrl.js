app.controller('publicCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data, $window, $localStorage) {


 var market = $routeParams.market;
 var type= $routeParams.type;
 var currency=$routeParams.currency;

 var apikey='1e39b43f80b54f458d0ca6f56cb42b02';
 var apisecret='0e39118c1dd54d2d890f83b99a93c5e5';

	
	if($location.$$path == '/bittrexgetmarkets/' || $location.$$path == '/bittrexgetmarkets'){

		$scope.getresult = {}
		$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgetmarkets.php',   
				success: function (data) {		
					console.log(data);
					$scope.getresult = data.result;
					$scope.$digest();
				},
				error: function (xhr, errorText) {
					
				}
			});
		}


		if($location.$$path == '/bittrexgetbalance/' || $location.$$path == '/bittrexgetbalance'){

		$scope.getresult = {}
		$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgetbalance.php?apikey='+apikey+'&secret='+apisecret,   
				success: function (data) {		
					console.log(data.result);
					$scope.getresult = data.result;
					$scope.$digest();
				},
				error: function (xhr, errorText) {
				
					
				}
			});
		}


		if($location.$$path == '/bittrexgetwithdrawalhistory/'+currency || $location.$$path == '/bittrexgetwithdrawalhistory/'+currency+'/'){

		$scope.getresult = {}
		$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgetwithdrawalhistory.php?apikey='+apikey+'&secret='+apisecret+'&currency='+currency,   
				success: function (data) {		
					console.log(data.result);
					$scope.getresult = data.result;
					$scope.$digest();
				},
				error: function (xhr, errorText) {
				
					
				}
			});
		}





		if($location.$$path == '/bittrexgetopenorders/'+market || $location.$$path == '/bittrexgetopenorders/'+market+'/'){

		$scope.getresult = {}
		$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgetopenorders.php?apikey='+apikey+'&secret='+apisecret+'&market='+market,   
				success: function (data) {		
					console.log(data.result);
					$scope.getresult = data.result;
					$scope.$digest();
				},
				error: function (xhr, errorText) {
				
					
				}
			});
		}










		




		if($location.$$path == '/bittrexgetcurrencies/' || $location.$$path == '/bittrexgetcurrencies'){

		$scope.getresult = {}
		$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgetcurrencies.php',   
				success: function (data) {		

					$scope.getresult = data.result;
					$scope.$digest();
				},
				error: function (xhr, errorText) {
					
				}
			});
		}



		if($location.$$path == '/bittrexgetorderhistory/' || $location.$$path == '/bittrexgetorderhistory'){

		$scope.getresult = {}
		$.ajax({
				type: 'GET',
				dataType : 'json',

				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgetorderhistory.php?apikey='+apikey+'&secret='+apisecret,  
				success: function (data) {		
					console.log(data.result);

					$scope.getresult = data.result;
					$scope.$digest();
				},
				error: function (xhr, errorText) {
					
					alert();
				}
			});
		}





		if($location.$$path == '/bittrexgetmarketsummary/' || $location.$$path == '/bittrexgetmarketsummary'){

		$scope.getresult = {}
		$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgetmarketsummary.php',   
				success: function (data) {		
					
					$scope.getresult = data.result;
					$scope.$digest();
				},
				error: function (xhr, errorText) {
					
				}
			});
		}


		if($location.$$path == '/bittrexgetsinglemarketsummary/'+market || $location.$$path == '/bittrexgetsinglemarketsummary/'+market+'/'){
		$scope.getresult = {}
		$scope.market=market;
			$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgetmarketsummary.php?market='+market,   
				success: function (data) {		
					
					$scope.getresult = data.result;
					
					$scope.$digest();
				},
				error: function (xhr, errorText) {
					
				}
			});
		}

		if($location.$$path == '/bittrexgetticker/'+market || $location.$$path == '/bittrexgetticker/'+market+'/'){
		$scope.getresult = {}
		$scope.market=market;
			$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgetticker.php?market='+market,   
				success: function (data) {		
					
					$scope.getresult = data.result;
				
					$scope.$digest();
				},
				error: function (xhr, errorText) {
					
				}
			});
		}




		if($location.$$path == '/bittrexgethistory/'+market || $location.$$path == '/bittrexgethistory/'+market+'/'){
		$scope.getresult = {}
		$scope.market=market;
			$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgethistory.php?market='+market,   
				success: function (data) {		
					console.log(data.result);
					$scope.getresult = data.result;
					
					$scope.$digest();
				},
				error: function (xhr, errorText) {
					
				}
			});
		}



		if($location.$$path == '/bittrexgetorderbook/'+market+'/'+type || $location.$$path == '/bittrexgetorderbook/'+market+'/'+type+'/'){
		$scope.getresult = {}
		$scope.market=market;
		$scope.type=type;
			$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgetorderbook.php?market='+market+'&type='+type,   
				success: function (data) {		
					
					$scope.getresult = data.result;
					console.log($scope.getresult);
					$scope.$digest();
				},
				error: function (xhr, errorText) {
					
				}
			});
		}

		
		if($location.$$path == '/bittrexbittrexgetdepositeaddress/'+currency || $location.$$path == '/bittrexbittrexgetdepositeaddress/'+currency+'/'){
	

	alert('https://comfiya.in/highfrequencytrading/api/bittrexgetdepositeaddress.php?apikey='+apikey+'&secret='+apisecret+'&currency='+currency);
		$scope.getresult = {}
		$scope.market=market;
		$scope.type=type;
			$.ajax({
				type: 'GET',
				dataType : 'json',

				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgetdepositeaddress.php?apikey='+apikey+'&secret='+apisecret+'&currency='+currency,   
				success: function (data) {		
			
					$scope.getresult = data.result;
					console.log($scope.getresult);
					$scope.$digest();
				},
				error: function (xhr, errorText) {
					
				}
			});
		}
});


