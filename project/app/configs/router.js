'use strict';

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('test', {
    url: '/test',
    templateUrl: 'controllers/home/test.html',
    controller: 'TestCtrl'
  });

  $stateProvider.state('notFound', {
    url: '/notFound',
    templateUrl: 'controllers/home/notFound.html',
    controller: 'HomeNotFoundCtrl'
  });

  $urlRouterProvider.otherwise('/notFound');
});
