console.log("MOCK-Active...");
(function () {
    "use strict";
    angular.module('ng1rw')
            .run(function ($httpBackend, $resource) {

                $httpBackend.when("GET", / *.html/).passThrough();
                $httpBackend.when("GET", / *.json/).passThrough();
                $httpBackend.when("GET", 'webresources/hello').respond("Mocked Hello");
                $httpBackend.when("GET", 'webresources/customer/query').respond($resource('app/mock/customer-query.json').get());
                $httpBackend.when("GET", 'webresources/shipper/query').respond($resource('app/mock/shipper-query.json').get());
                $httpBackend.when("GET", 'webresources/order/query').respond($resource('app/mock/order-query.json').get());

                $httpBackend.when("POST", 'webresources/order/assign').respond(function() {
                    console.log("Assign: " + arguments[2]);
                    return [201,''];
                });






                //$httpBackend.when("GET", /webresources\/*/).passThrough();
            });
})();


