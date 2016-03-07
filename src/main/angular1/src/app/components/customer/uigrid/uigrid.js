(function () {
    "use strict";
    angular.module("ng1rw.uigrid", ['ng1rw.CustomerServices', 'ui.grid', 'ui.grid.pagination'])
            .controller("UIGrid", function (CustomerService) {
                var vm = this;
                CustomerService.query(null, function (response) {
                    vm.customers = response.result;
                    vm.initTable();
                });

                vm.initTable = function () {
                    vm.gridOptions = {
                        data: vm.customers,
                        paginationPageSizes: [5, 10, 25],
                        paginationPageSize: 15,
                        enableColumnMenus: false
                    };
                };
            });
})();


