(function () {
    "use strict";
    describe('HelloWorld-Controller', function () {
        var HelloWorldController,
                $httpBackend;


        beforeEach(module('ng1rw.home'));
        beforeEach(inject(function ($controller, HelloWorldService, _$httpBackend_) {
            $httpBackend=_$httpBackend_;
            HelloWorldController = $controller('HelloWorld', {
                'HelloWorldService': HelloWorldService
            });
        }));

        it("Test Existenz", function () {
            expect(HelloWorldController).toBeTruthy();
        });
        it("Test Init Call", function () {
            $httpBackend.when('GET', 'webresources/hello').respond("Hello");
            $httpBackend.flush();
            
            expect(HelloWorldController.text).toBe("Hello");
        });
    });
})();


