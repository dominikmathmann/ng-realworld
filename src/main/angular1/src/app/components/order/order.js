(function () {
    "use strict";
    angular.module('ng1rw.order', ['ng1realworld.assignshipper'])

            .config(function ($stateProvider) {
                $stateProvider
                        .state("Order.AssignShipper", {
                            url: '/assign-shipper',
                            templateUrl: 'app/components/order/assignShipper/assign-shipper.html',
                            controller: 'AssignShipper',
                            controllerAs: 'vm'
                        });
            });

})();


