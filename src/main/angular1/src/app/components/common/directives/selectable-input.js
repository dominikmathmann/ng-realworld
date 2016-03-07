(function () {
    "use strict";
    angular.module('ng1realworld.directives.selectable-input', [])
            .directive("inputSelection", function () {
                return {
                    restrict: 'E',
                    transclude: true,
                    template: '<ul ng-transclude></ul>',
                    scope: {
                        single: '=',
                        selection: '='
                    },
                    controller: function ($scope, $rootScope) {
                        var vm = this;
                        $rootScope.$on("selectable-input.clear", function () {
                            $('input-selection').find('li.selected').removeClass("selected");
                            $scope.selection = [];
                        });

                        vm.addSelection = function (element, value) {
                            if ($scope.single && $scope.selection.length !== 0) {
                                element.closest('input-selection').find('li.selected').removeClass("selected");
                                $scope.selection = [];
                            }

                            $scope.selection.push(value);
                        };

                        vm.removeSelection = function (element) {
                            $scope.selection.splice($scope.selection.indexOf(element.val()), 1);
                        };

                    }
                };
            })

            .directive("selectableInput", function () {
                var init = function (scope) {
                    if (!scope.label)
                    {
                        scope.label = scope.value;
                    }
                }

                var link = function (scope, element, attrs, ctrl) {
                    init(scope);
                    var inputElement = element.find("li");
                    inputElement.on('click', function (event) {
                        var liElement=inputElement;//inputElement.parent();
                        if (liElement.hasClass('selected')) {
                            ctrl.removeSelection(liElement);
                            inputElement.removeClass('selected');
                        } else {
                            ctrl.addSelection(inputElement, scope.value);
                            liElement.addClass('selected');
                        }
                    });
                };

                return {
                    require: '^^inputSelection',
                    templateUrl: 'app/components/common/directives/selectable-input.html',
                    restrict: 'E',
                    scope: {
                        value: '@',
                        label: '@'
                    },
                    link: link
                };
            });
})();


