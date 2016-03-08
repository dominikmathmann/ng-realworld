(function () {
    "use strict";
    angular.module("ng1rw.listblock", ['ng1rw.CustomerServices', 'ng1rw.directives.customer-details'])
            .controller("ListBlock", function (CustomerService) {
                var vm = this;
                CustomerService.query({}, function (response) {
                    vm.customers = response.result;
                    vm.selected;
                    
                    vm.selectCustomer = function (customer){
                        vm.selected=customer;
                        alert(customer.customerID);
                    };
                });
            });
})();


