'use strict';

/**
 * @ngdoc function
 * @name angularHelloApp.controller:InvoiceCtrl
 * @description
 * # InvoiceCtrl
 * Controller of the angularHelloApp
 */
angular.module('angularHelloApp')
  .controller('InvoiceCtrl', function () {
    this.qty  = 1;
    this.cost = 2;
    this.inCurr = "USD";
    this.currencies = ['EUR', 'USD', 'RUP'];
    this.usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      RUP: 68.0
    };
    this.total = function total(outCurr){
      return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
    };
    this.convertCurrency = function convertCurrency(amount, inCurr, outCurr){
      return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
    };
    this.pay = function pay() {
      window.alert("Thanks!");
    };
  });
