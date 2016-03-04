(function () {
    "use strict";
    angular.module("ng1rw.HelloWorldServices", [])

            .factory("HelloWorldService", function ($http) {
                return {
                    getHello: function () {
                        return $http.get('webresources/hello');
                    } 
                };
            });
})();


