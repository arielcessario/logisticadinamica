(function () {
  'use strict';

// Declare app level module which depends on views, and components
  angular.module('logistica', ['oc.lazyLoad',
    'ngRoute',
    'ngAnimate',
    'angular-jwt',
    'auth0',
    'acUtils',
    'acUsuarios',
    'LangTables'
  ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});

    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl',
      //data: {requiresLogin: false},
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load('view1/view1.js');
        }]
      }
    });

    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl',
      //data: {requiresLogin: false},
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load('view2/view2.js');
        }]
      }
    });


  }]).controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope'];
  function AppCtrl($scope) {

    var vm = this;
    vm.hideLoader = true;

  }

})();
