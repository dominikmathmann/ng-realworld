(function () {
    "use strict";

    angular.module("ng1rw", ['ngMockE2E', 'ui.router', 'ng1rw.home', 'ng1rw.customer', 'ng1rw.order', 'angular-growl'])
            .config(function ($stateProvider, $urlRouterProvider) { 
                $stateProvider
                        .state('HelloWorld', {
                            url: '/helloworld',
                            templateUrl: "app/components/helloworld/helloworld.html",
                            controller: 'HelloWorld',
                            controllerAs: 'vm'
                        })
                        .state("Customer", {
                            url: '/customer',
                            template: '<div ui-view></div>',
                            controller: 'Customer',
                            controllerAs: 'vm'
                        })
                        .state("Order", {
                            url: '/order',
                            template: '<div ui-view></div>'
                        });

                $urlRouterProvider.otherwise("helloworld");
            })

            .controller('AppController', function () {
                var vm = this;

                vm.text = "Hello Angular 1";


            });
})();


