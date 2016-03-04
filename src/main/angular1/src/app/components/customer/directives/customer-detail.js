(function () {
    "use strict";
    angular.module("ng1rw.directives.customer-details", [])
            .directive('customerDetails', function () {
                return {
                    templateUrl: 'app/components/customer/directives/customer-detail.html',
                    restrict: 'E',
                    scope: {
                        customer: '=',
                        click: '&'
                    },
                    controller: function ($scope) {}
                };
            });
})();


