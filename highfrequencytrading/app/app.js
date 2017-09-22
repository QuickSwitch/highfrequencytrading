var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster', 'ngStorage','myConstants']);
app.config(['$routeProvider', '$httpProvider',
    function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = {};

        $httpProvider.defaults.headers.post = {};

        $httpProvider.defaults.headers.get = {};

        $httpProvider.defaults.headers.put = {};

        $httpProvider.defaults.headers.patch = {};

        $routeProvider.

                when('/login', {

                    title: 'Login',

                    templateUrl: 'partials/login.html',

                    controller: 'authCtrl'

                })

                .when('/logout', {

                    title: 'Logout',

                    templateUrl: 'partials/login.html',

                    controller: 'logoutCtrl'

                })

                .when('/signup', {

                    title: 'Signup',

                    templateUrl: 'partials/signup.html',

                    controller: 'authCtrl'

                })

                .when('/dashboard', {

                    title: 'Dashboard',

                    templateUrl: 'partials/dashboard.html',

                    controller: 'dashCtrl'

                })

                .when('/account', {

                    title: 'My Account',

                    templateUrl: 'partials/account.html',

                    controller: 'accountCtrl'

                })

                

                

                .when('/', {

                    title: 'Login',

                    templateUrl: 'partials/login.html',

                    controller: 'authCtrl',

                    role: '0'

                })



                .when('/bittrexgetmarkets', {

                    title: 'Bittrex Getmarkets',

                    templateUrl: 'partials/bittrex/bittrexgetmarkets.html',

                    controller: 'publicCtrl',

                    role: '0'

                })




                .when('/gdaxgetmarkets', {

                    title: 'Bittrex Getmarkets',

                    templateUrl: 'partials/gdax/gdaxgetmarkets.html',

                    controller: 'gdaxpblcCtrl',

                    role: '0'

                })



                .when('/bittrexgetbalance', {

                    title: 'Bittrex Getmarkets',

                    templateUrl: 'partials/bittrex/bittrexgetcurrencies.html',

                    controller: 'publicCtrl',
                    cache:false,

                    role: '0'

                })



                .when('/bittrexgetorderhistory', {

                    title: 'Bittrex Getmarkets',

                    templateUrl: 'partials/bittrex/getorderhistory.html',
                    cache:false,

                    controller: 'publicCtrl',

                    role: '0'

                })



                .when('/bittrexgetwithdrawalhistory/:currency', {

                    title: 'Bittrex Withdrawal History',

                    templateUrl: 'partials/bittrex/bittrexgetwithdrawalhistory.html',

                    controller: 'publicCtrl',

                    role: '0'

                })
                



                .when('/bittrexgetcurrencies', {

                    title: 'Bittrex Currencies',

                    templateUrl: 'partials/bittrex/bittrexgetcurrencies.html',

                    controller: 'publicCtrl',

                    role: '0'

                })

                 .when('/bittrexgetmarketsummary', {

                    title: 'Bittrex Currencies',

                    templateUrl: 'partials/bittrex/bittrexgetmarketsummary.html',

                    controller: 'publicCtrl',

                    role: '0'

                })

                  .when('/bittrexgetsinglemarketsummary/:market', {

                    title: 'Bittrex Currencies',

                    templateUrl: 'partials/bittrex/bittrexgetsinglemarketsummary.html',

                    controller: 'publicCtrl',

                    role: '0'

                })

                   .when('/bittrexgetticker/:market', {

                    title: 'Bittrex Currencies',

                    templateUrl: 'partials/bittrex/bittrexgetticker.html',

                    controller: 'publicCtrl',

                    role: '0'

                })


                    .when('/gdaxgetticker/:product', {

                    title: 'GDAX Currencies',

                    templateUrl: 'partials/gdax/gdaxgetticker.html',

                    controller: 'gdaxpblcCtrl',

                    role: '0'

                })


                   .when('/bittrexgethistory/:market', {

                    title: 'Bittrex Currencies',

                    templateUrl: 'partials/bittrex/bittrexgethistory.html',

                    controller: 'publicCtrl',

                    role: '0'

                })

                    .when('/bittrexgetorderbook/:market/:type', {

                    title: 'Bittrex Currencies',

                    templateUrl: 'partials/bittrex/bittrexgetorderbook.html',

                    controller: 'publicCtrl',

                    role: '0'

                })
				
				.when('/bittrex', {

                    title: 'Bittrex',

                    templateUrl: 'partials/bittrex.html',

                    controller: 'publicCtrl',

                     cache:false,

                    role: '0'

                })




                .when('/gdax', {

                    title: 'Bittrex',

                    templateUrl: 'partials/gdax.html',

                    controller: 'publicCtrl',

                     cache:false,

                    role: '0'

                })

                    .when('/bittrexgetopenorders/:market', {

                    title: 'Bittrex',

                    templateUrl: 'partials/bittrex/bittrexgetopenorders.html',

                    controller: 'publicCtrl',

                     cache:false,

                    role: '0'

                })


                    

                    .when('/bittrexbittrexgetdepositeaddress/:currency', {

                    title: 'Bittrex',

                    templateUrl: 'partials/bittrex/bittrexbittrexgetdepositeaddress.html',

                    controller: 'publicCtrl',

                     cache:false,

                    role: '0'

                })



                ;

    }])

        .run(function ($rootScope, $location, Data, $localStorage) {

            $rootScope.$on("$routeChangeStart", function (event, next, current) {

                $rootScope.authenticated = false;

                if ($localStorage.username) {

                    $rootScope.authenticated = true;

                    $rootScope.uid = $localStorage.username;

                } else {

                    var nextUrl = next.$$route.originalPath;

                    if (nextUrl == '/signup' || nextUrl == '/login') {



                    } else {

                        $location.path("/login");

                    }

                }



            });

        });