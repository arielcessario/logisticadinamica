(function () {
    'use strict';

    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('contacto', ['ngRoute'])
        .controller('ContactoController', ContactoController);


    ContactoController.$inject = ['$scope', 'ContactsService'];
    function ContactoController($scope, ContactsService) {

        var vm = this;
        vm.nombre = '';
        vm.mail = '';
        vm.asunto = '';
        vm.mensaje = '';
        vm.enviado = false;
        vm.enviando = false;

        vm.sendMail = sendMail;

        function sendMail() {
            if (vm.enviando) {
                return;
            }
            vm.enviando = true;

            ContactsService.sendMail(vm.email,
                [{mail: 'arielcessario@gmail.com'}, {mail: 'mmaneff@gmail.com'}, {mail: 'diegoyankelevich@gmail.com'}],
                vm.nombre,
                vm.asunto,
                vm.mensaje,
                function (data, result) {
                    console.log(data);
                    console.log(result);
                    vm.enviando = false;

                    vm.email = '';
                    vm.nombre = '';
                    vm.asunto = '';
                    vm.mensaje = '';
                });
        }

    }

})();