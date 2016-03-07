(function () {
    "use strict";
    angular.module("ng1rw.CustomerServices", ['ngResource'])
            .factory("CustomerService", function ($resource) {
                return $resource("webresources/customer", {query: '@query'}, {
                    'query': {method: 'GET', action: 'get', url: 'webresources/customer/query', isArray:false }
                });
            });
        })();


