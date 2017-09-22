app.controller('gdaxpblcCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data, $window, $localStorage) {


 var product = $routeParams.product;
 var type= $routeParams.type;
 var apikey='1e39b43f80b54f458d0ca6f56cb42b02';
 var apisecret='0e39118c1dd54d2d890f83b99a93c5e5';



	if($location.$$path == '/gdaxgetmarkets/' || $location.$$path == '/gdaxgetmarkets'){

		$scope.getresult = {}
		$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/gdaxgetmarkets.php',   
				success: function (data) {		
			console.log(data);

			console.log(data.result);
					$scope.getresult = data;

console.log($scope.getresult);					
					$scope.$digest();
				},
				error: function (xhr, errorText) {
				
					
				}
			});
		}




		if($location.$$path == '/gdaxgetticker/'+product || $location.$$path == '/gdaxgetticker/'+product+'/'){
		$scope.getresult = {}
		$scope.product=product;
			$.ajax({
				type: 'GET',
				dataType : 'json',
				url: 'https://comfiya.in/highfrequencytrading/api/gdaxgetticker.php?product='+product,   
				success: function (data) {		
					
					$scope.getresult = data;
				
					$scope.$digest();
				},
				error: function (xhr, errorText) {
					
				}
			});
		}
	


});


