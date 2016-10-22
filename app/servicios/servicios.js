(function () {
    'use strict';

    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('servicios', ['ngRoute'])
        .controller('ServiciosController', ServiciosController);


    ServiciosController.$inject = ['$scope', '$location'];
    function ServiciosController($scope, $location) {

        var vm = this;

    }

})();