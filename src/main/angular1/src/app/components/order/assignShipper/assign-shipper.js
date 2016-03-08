(function () {
    "use strict";
    angular.module("ng1realworld.assignshipper", ['ng1realworld.OrderService', 'ng1realworld.ShipperService', 'ng1realworld.directives.selectable-input'])

            .controller("AssignShipper", function ($rootScope, growl, OrderService, ShipperService, $q) {
                var vm = this;
                vm.selectedOrders = [];
                vm.selectedShipper = [];


                vm.update = function () {
                    var promisses = [];

                    vm.selectedOrders.forEach(function (order) {
                        promisses.push(OrderService.assign({orderID: order, shipperID: vm.selectedShipper[0]}).$promise);
                        $q.all(promisses).then(function () {
                            growl.info("Update erfolgreich");
                            $rootScope.$broadcast("selectable-input.clear");
                        }, function (error) {
                            growl.error("Ein Fehler ist aufgetreten");
                        });
                    });
                };

                $q.all([ShipperService.query().$promise, OrderService.query().$promise])
                        .then(function (response) {
                            vm.shipper = response[0].result;
                            vm.orders = response[1].result;
                        });
            });
})();


