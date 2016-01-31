'use strict';

/**
 * @ngdoc overview
 * @name angularHelloApp
 * @description
 * # angularHelloApp
 *
 * Main module of the application.
 */
angular
  .module('angularHelloApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
/*
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
*/
      .when('/', {
        templateUrl: 'views/invoice.html',
        controller: 'InvoiceCtrl',
        controllerAs: 'invoice'
      })
      .when('/hello', {
        templateUrl: 'views/hello.html',
        controller: 'HelloCtrl',
        controllerAs: 'hello'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/invoice', {
        templateUrl: 'views/invoice.html',
        controller: 'InvoiceCtrl',
        controllerAs: 'invoice'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('currencyConverter', function() {
    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };
    var convert = function (amount, inCurr, outCurr) {
      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };

    return {
      currencies: currencies,
      convert: convert
    };
  });
