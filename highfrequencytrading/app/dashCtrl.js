app.controller('dashCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data, $window, $localStorage,$interval) {

    $scope.account = {}
    $scope.participants = {}
    if ($localStorage.username) {
       $scope.account.username = $localStorage.username;
    } else {
        $location.path("/login");
    }

    $scope.logout = function () {
        delete $localStorage.message;
        delete $localStorage.status;
        delete $localStorage.username;
        delete $localStorage.password;
        $location.path('/login');
    }
	
	



if($location.$$path == '/dashboard/' || $location.$$path == '/dashboard'){


        $scope.getresult = {}
        $.ajax({
                type: 'GET',
                dataType : 'json',
                url: 'https://comfiya.in/highfrequencytrading/api/dashboard.php?product=BTC-USD&market=USDT-BTC&gmarket=btcusd',   
                success: function (data) {      
            

            console.log(data.result);
                    $scope.getresult = data;

console.log($scope.getresult);                  
                    $scope.$digest();
                },
                error: function (xhr, errorText) {
                
                    
                }
            });
        }



        if($location.$$path == '/dashboard/' || $location.$$path == '/dashboard'){


        $scope.getresult1 = {}
        $.ajax({
                type: 'GET',
                dataType : 'json',
                url: 'https://comfiya.in/highfrequencytrading/api/dashboard.php?product=ETH-USD&market=USDT-ETH&gmarket=ethusd',   
                success: function (data) {      
            

                    $scope.getresult1 = data;

console.log($scope.getresult1);                  
                    $scope.$digest();
                },
                error: function (xhr, errorText) {
                
                    
                }
            });
        }
   



   if($location.$$path == '/dashboard/' || $location.$$path == '/dashboard'){


        $scope.getresult2 = {}
        $.ajax({
                type: 'GET',
                dataType : 'json',
                url: 'https://comfiya.in/highfrequencytrading/api/dashboard.php?product=LTC-USD&market=USDT-LTC',   
                success: function (data) {      
            

                    $scope.getresult2 = data;

console.log($scope.getresult2);                  
                    $scope.$digest();
                },
                error: function (xhr, errorText) {
                
                    
                }
            });
        }
	


	

timer = $interval(function() {
//$scope.message = "DIV is refreshed at " + i + " seconds.";

if($location.$$path == '/dashboard/' || $location.$$path == '/dashboard'){


        //$scope.getresult = {}
        $.ajax({
                type: 'GET',
                dataType : 'json',
                url: 'https://comfiya.in/highfrequencytrading/api/dashboard.php?product=BTC-USD&market=USDT-BTC&gmarket=btcusd',   
                success: function (data) {      
            

            console.log(data.result);
                    $scope.getresult = data;

console.log($scope.getresult);                  
                    $scope.$digest();
                },
                error: function (xhr, errorText) {
                
                    
                }
            });
        }



        if($location.$$path == '/dashboard/' || $location.$$path == '/dashboard'){


       // $scope.getresult1 = {}
        $.ajax({
                type: 'GET',
                dataType : 'json',
                url: 'https://comfiya.in/highfrequencytrading/api/dashboard.php?product=ETH-USD&market=USDT-ETH&gmarket=ethusd',   
                success: function (data) {      
            

                    $scope.getresult1 = data;

console.log($scope.getresult1);                  
                    $scope.$digest();
                },
                error: function (xhr, errorText) {
                
                    
                }
            });
        }
   



   if($location.$$path == '/dashboard/' || $location.$$path == '/dashboard'){


       // $scope.getresult2 = {}
        $.ajax({
                type: 'GET',
                dataType : 'json',
                url: 'https://comfiya.in/highfrequencytrading/api/dashboard.php?product=LTC-USD&market=USDT-LTC',   
                success: function (data) {      
            

                    $scope.getresult2 = data;

console.log($scope.getresult2);                  
                    $scope.$digest();
                },
                error: function (xhr, errorText) {
                
                    
                }
            });
        }
    



	
  


}, 1000)
  


 
  
});