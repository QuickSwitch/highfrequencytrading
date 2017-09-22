app.controller('accountCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data, $window, $localStorage) {
    $scope.account = {};
    if ($localStorage.username) {

       
    } else {
        $location.path("/login");
    }


    $scope.logout = function () {
        delete $localStorage.message;
        delete $localStorage.status;
        delete $localStorage.username;
        delete $localStorage.password;
        $location.path('login');
    }

});