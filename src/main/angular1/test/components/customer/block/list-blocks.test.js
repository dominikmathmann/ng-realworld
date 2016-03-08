(function () {
    "use strict";
    describe('list-block Controller', function () {
        var Controller,
                $httpBackend;


        beforeEach(module("ng1rw.listblock"));
        beforeEach(inject(function ($controller, CustomerService, _$httpBackend_) {
            $httpBackend=_$httpBackend_;
            Controller = $controller("ListBlock", {CustomerService: CustomerService});
            $httpBackend.when("GET", 'webresources/customer/query').respond(window.jasminData.customer);
            $httpBackend.flush();
        }));

        it("Test Existenz", function () {
            expect(Controller).toBeTruthy();
        });
        
        it ("Test Init Customer", function() {
            expect(Controller.customers.length).toBe(91);
        });
        
        it("Test Selection", function(){
            Controller.selectCustomer(Controller.customers[5]);
            expect(Controller.selected.customerID).toBe(Controller.customers[5].customerID);
        });
    });
})();


