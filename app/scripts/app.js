'use strict';

/**
 * @ngdoc overview
 * @name partyFinderApp
 * @description
 * # partyFinderApp
 *
 * Main module of the application.
 */
angular
  .module('partyFinderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/checkin', {
        templateUrl: 'views/checkin.html',
        controller: 'CheckinCtrl'
      })
      .when('/friends', {
        templateUrl: 'views/friends.html',
        controller: 'FriendsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
