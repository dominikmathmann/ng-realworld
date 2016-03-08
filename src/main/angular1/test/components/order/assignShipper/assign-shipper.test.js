(function () {
    "use strict";
    describe('assign-shipper Controller', function () {
        var Controller,
                $httpBackend,
                infoCount;

        beforeEach(module('ng1realworld.assignshipper'));
        beforeEach(inject(function ($controller, OrderService, ShipperService, $rootScope, $q, _$httpBackend_) {
            infoCount = 0;

            Controller = $controller('AssignShipper', {
                OrderService: OrderService,
                ShipperService: ShipperService,
                $rootScope: $rootScope,
                growl: {
                    info: function (e) {
                        infoCount++;
                    }
                },
                $q: $q
            });


            $httpBackend = _$httpBackend_;
            $httpBackend.when("GET", 'webresources/shipper/query').respond(window.jasminData.shipper);
            $httpBackend.when("GET", 'webresources/order/query').respond(window.jasminData.order);
            $httpBackend.flush();

        }));


        it("ToBeDefined", function () {
            expect(Controller).toBeTruthy();
        });

        it("Inititialized", function () {
            expect(Controller.shipper.length).toBe(3);
            expect(Controller.orders.length).toBe(830);
        });

        it("Update", function () {
            Controller.selectedOrders.push(Controller.orders[0].orderID);
            Controller.selectedOrders.push(Controller.orders[1].orderID);

            Controller.selectedShipper.push(Controller.shipper[0].shipperID);

            $httpBackend.expectPOST("webresources/order/assign", {orderID: 10248, shipperID: 1}).respond(200, '');
            $httpBackend.expectPOST("webresources/order/assign", {orderID: 10249, shipperID: 1}).respond(200, '');

            Controller.update();
            $httpBackend.flush();

            expect(infoCount).toBe(2);
        });
    });
})();


