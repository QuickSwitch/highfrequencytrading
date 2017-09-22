app.controller('authCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data, $window, $localStorage,username,password) {

    if ($localStorage.username) {
        $location.path("/dashboard");
    }

    $scope.login = {};
    $scope.signup = {};
    $scope.results = {};
   

    $scope.doLogin = function (customer) {
		if(customer.email == username && customer.password == password) {
			$scope.results.status = 'success';
			$scope.results.message = 'Welcome to High Frequency Trading';
			$scope.results.username = username;
			$scope.results.password = password;
			$scope.$localStorage = $localStorage.$default($scope.results);
			Data.toast($scope.results);
            $location.path('dashboard');
		} else { 
			$scope.results.status = 'error';
			$scope.results.message = 'Invalid Username Password';
			Data.toast($scope.results);
		}
		
        /* Data.post('login/indexAPI', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $scope.$localStorage = $localStorage.$default(results);
                $location.path('dashboard');
            }
        }); */
    };

    $scope.signUp = function (customer) {
        Data.post('page/applicationformAPI', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $scope.$localStorage = $localStorage.$default(results);
                $location.path('dashboard');
            }
        });
    };
    $scope.logout = function () {
        delete $localStorage.message;
        delete $localStorage.status;
        delete $localStorage.username;
        delete $localStorage.password;
        $location.path('login');
    }
});