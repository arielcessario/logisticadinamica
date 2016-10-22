(function () {
    'use strict';

    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('alcance', ['ngRoute'])
        .controller('AlcanceController', AlcanceController);


    AlcanceController.$inject = ['$scope', '$location'];
    function AlcanceController($scope, $location) {

        var vm = this;

    }

})();