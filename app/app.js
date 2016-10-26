(function () {
  'use strict';

// Declare app level module which depends on views, and components
  angular.module('logistica', ['oc.lazyLoad',
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'ui.bootstrap.collapse',
    'angular-jwt',
    'auth0',
    'acUtils',
    'acContacts',
    'acUsuarios',
    'LangTables'
  ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/main'});

    $routeProvider.when('/main', {
      templateUrl: 'main/main.html',
      controller: 'MainController',
      //data: {requiresLogin: false},
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load('main/main.js');
        }]
      }
    });

    $routeProvider.when('/empresa', {
      templateUrl: 'empresa/empresa.html',
      controller: 'EmpresaController',
      //data: {requiresLogin: false},
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load('empresa/empresa.js');
        }]
      }
    });

    $routeProvider.when('/servicios', {
      templateUrl: 'servicios/servicios.html',
      controller: 'ServiciosController',
      //data: {requiresLogin: false},
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load('servicios/servicios.js');
        }]
      }
    });

    $routeProvider.when('/alcance', {
      templateUrl: 'alcance/alcance.html',
      controller: 'AlcanceController',
      //data: {requiresLogin: false},
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load('alcance/alcance.js');
        }]
      }
    });

    $routeProvider.when('/deposito', {
      templateUrl: 'deposito/deposito.html',
      controller: 'DepositoController',
      //data: {requiresLogin: false},
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load('deposito/deposito.js');
        }]
      }
    });

    $routeProvider.when('/contacto', {
      templateUrl: 'contacto/contacto.html',
      controller: 'ContactoController',
      //data: {requiresLogin: false},
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load('contacto/contacto.js');
        }]
      }
    });


  }]).controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope'];
  function AppCtrl($scope) {

    //EL MENÚ bootstrap LO SAQUE DE ESTA URL
    //https://jsfiddle.net/7z8hLuyu/
    //http://stackoverflow.com/questions/14741988/twitter-bootstrap-navbar-with-angularjs-collapse-not-functioning

    var vm = this;
    vm.hideLoader = true;
    vm.isCollapsed = true;

    //FUNCIONES
    vm.toggleCollapse = toggleCollapse;

    function toggleCollapse() {
      vm.isCollapsed = !vm.isCollapsed;
    }

  }

})();
