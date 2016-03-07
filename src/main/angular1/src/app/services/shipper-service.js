(function () {
    "use strict";
    angular.module("ng1realworld.ShipperService", ['ngResource'])

            .factory("ShipperService", function ($resource) {
                return $resource('webresources/shipper', null, {
                    'query': {method: 'GET', isArray: false, url: 'webresources/shipper/query'}
                });
            });
})();


