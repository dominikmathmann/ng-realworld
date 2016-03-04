(function () {
    "use strict";
    angular.module("ng1rw.customer", ['ui.router', 'ng1rw.listblock', 'ng1rw.datatables', 'ng1rw.uigrid'])
            .config(function ($stateProvider) {

                $stateProvider
                        .state("Customer.ListBlock", {
                            url: 'list-block',
                            templateUrl: 'app/components/customer/block/list-block.html',
                            controller: 'ListBlock',
                            controllerAs: 'vm'
                        })
                        .state("Customer.Datatables", {
                            url: 'datatables',
                            templateUrl:'app/components/customer/datatables/datatables.html',
                            controller: 'Datatables',
                            controllerAs: 'vm'
                        })
                        .state("Customer.UIGrid", {
                            url: 'aggrid',
                            templateUrl:'app/components/customer/uigrid/uigrid.html',
                            controller: 'UIGrid',
                            controllerAs: 'vm'
                        });
            })

            .controller("Customer", function () {

            });
})();


