(function () {
    "use strict";

    angular.module("ng1rw.datatables", ['ng1rw.CustomerServices'])

            .controller("Datatables", function (CustomerService) {
                var vm = this;

                jQuery('#customer').DataTable({
                    ajax: function (data, callback, settings) {
                        CustomerService.query(null, function (response) {
                            callback({
                                data: response.result,
                                recordsTotal: response.resultCount,
                                recordsFiltered: response.resultCount
                            });
                        });
                    },
                    searching: false,
                    columns: [
                        {data: 'customerID'},
                        {data: 'companyName'},
                        {data: 'contactName'},
                        {data: 'city'}
                    ],
                    language: {
                        url: "http://cdn.datatables.net/plug-ins/1.10.11/i18n/German.json"
                    }
                });

            });
})();


