(function () {
    "use strict";
    angular.module("ng1realworld.OrderService", ['ngResource'])

            .factory("OrderService", function ($resource) {
                return $resource('webresources/order', null, {
                    'query': {method: 'GET', isArray: false, url: 'webresources/order/query'},
                    'assign': {method: 'POST', url:'webresources/order/assign'}
                });
            });
})();


