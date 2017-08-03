angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('locations', {
                url:'/locations',
                templateUrl: '../views/locations.html',
                controller:'locationsCtrl'
            })
            .state('packages', {
                url:'/packages/:country',
                templateUrl: '../views/packages.html',
                controller:'packagesCtrl'
            })
            .state('booked', {
                url:'/booked/:id',
                templateUrl: '../views/booked.html',
                controller:'bookedCtrl'
            })
            .state('adventurers', {
                url:'/adventurers',
                parent:'home',
                templateUrl: '../views/adventurers.html'
            })
            .state('contact', {
                url:'/contact',
                parent:'home',
                templateUrl: '../views/contact.html'
            })

        $urlRouterProvider
            .otherwise('/');
    });
