app.controller('logoutCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data, $window, $localStorage) {
    delete $localStorage.message;
    delete $localStorage.status;
    delete $localStorage.id;
    $location.path('/login');
});