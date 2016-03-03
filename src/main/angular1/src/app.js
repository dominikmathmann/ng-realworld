(function () {
    "use strict";

    angular.module("ng1rw", ['ui.router', 'ng1rw.home'])
            .config(function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                        .state('home', {
                            url: '/home',
                            templateUrl: "app/components/home/home.html",
                            controller: 'Home',
                            controllerAs: 'vm'
                        });

                $urlRouterProvider.otherwise("home");
            })

            .controller('AppController', function () {
                var vm = this;

                vm.text = "Hello Angular 1";


            });
})();


