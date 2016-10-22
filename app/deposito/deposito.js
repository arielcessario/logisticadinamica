(function () {
    'use strict';

    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('deposito', ['ngRoute'])
        .controller('DepositoController', DepositoController);


    DepositoController.$inject = ['$scope', '$location'];
    function DepositoController($scope, $location) {

        var vm = this;

    }

})();