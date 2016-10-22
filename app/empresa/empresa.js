(function () {
  'use strict';

  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('empresa', ['ngRoute'])
      .controller('EmpresaController', EmpresaController);


  EmpresaController.$inject = ['$scope', '$location'];
  function EmpresaController($scope, $location) {

    var vm = this;

  }

})();