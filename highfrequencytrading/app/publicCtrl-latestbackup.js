app.controller('publicCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data, $window, $localStorage) {


 var market = $routeParams.market;

	
	if($location.$$path == '/bittrexgetmarkets/' || $location.$$path == '/bittrexgetmarkets'){

		$scope.getresult = {}
		$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/bittrexgetmarkets.php',   
				success: function (data) {		
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
					console.log($scope.getresult);
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
					console.log($scope.getresult);
					$scope.$digest();
				},
				error: function (xhr, errorText) {
					
				}
			});
		}
});