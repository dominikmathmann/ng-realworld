(function () {
    "use strict";
    angular.module("ng1rw.home", ['ng1rw.HelloWorldServices'])
            .controller("HelloWorld", function (HelloWorldService) {
                var vm = this;
                vm.say = "Say  ::   "
                vm.text = HelloWorldService.getHello().then(function (result) {
                    vm.text = result.data
                })
            });
})();


