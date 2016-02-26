'use strict';

/**
 * @ngdoc overview
 * @name wunderApp
 * @description
 * # wunderApp
 *
 * Main module of the application.
 */
angular
  .module('wunderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'com.2fdevs.videogular.plugins.overlayplay',
    'com.2fdevs.videogular.plugins.poster'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        activetab: 'main'
      })
      .when('/kalender', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl',
        controllerAs: 'calendar',
        activetab: 'calendar'
      })
      .when('/person', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl',
        controllerAs: 'person',
        activetab: 'person'
      })
      .when('/park', {
        templateUrl: 'views/park.html',
        controller: 'ParkCtrl',
        controllerAs: 'park',
        activetab: 'park'
      })
      .when('/hintergrund', {
        templateUrl: 'views/background.html',
        controller: 'BackgroundCtrl',
        controllerAs: 'back',
        activetab: 'hintergrund'
      })
      .when('/monitoring', {
        templateUrl: 'views/monitoring.html',
        controller: 'MonitoringCtrl',
        controllerAs: 'monitoring',
        activetab: 'monitoring'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).controller('naviCtrl', function ($scope, $route) {
        $scope.$route = $route;
  }).controller('footerCtrl', function ($scope) {
        var d = new Date();
        $scope.year = d.getFullYear();
  });
