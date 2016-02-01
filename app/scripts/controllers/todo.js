'use strict';

/**
 * @ngdoc function
 * @name angularHelloApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the angularHelloApp
 */
angular.module('angularHelloApp')
  .controller('TodoCtrl', function () {
    this.newTodo = "";
    this.todoList = [
      {text: 'Learn AngularJS', complete: false, createdOn: new Date()},
      {text: 'Learn Bootstrap CSS', complete: false, createdOn: new Date()},
      {text: 'Build TODO Application using Angular and Bootstrap', complete: false, createdOn: new Date()}
    ];
    this.startNewTodo = function startNewTodo(){
      this.newTodo = "";
      $('#todoInput').focus();
    };
  });
