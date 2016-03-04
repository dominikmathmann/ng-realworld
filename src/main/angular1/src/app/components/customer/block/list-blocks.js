(function () {
    "use strict";
    angular.module("ng1rw.listblock", ['ng1rw.CustomerServices', 'ng1rw.directives.customer-details'])
            .controller("ListBlock", function (CustomerService) {
                var vm = this;
                CustomerService.get({query: JSON.stringify({})}, function (response) {
                    vm.customers = response.result;
                    
                    vm.selectCustomer = function (customer){
                        alert(customer.customerID);
                    };
                });
            });
})();


