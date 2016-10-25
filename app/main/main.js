(function () {
  'use strict';

  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('main', ['ngRoute'])
      .controller('MainController', MainController);


  MainController.$inject = ['$scope', '$location'];
  function MainController($scope, $location) {

    var vm = this;

  }

})();