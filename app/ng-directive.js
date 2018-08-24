var myApp = angular.module("myApp", []);
var thisScope;

myApp.controller("myController", function ($scope) {
    $scope.title = "默认标题";
    thisScope = $scope;
});

myApp.directive("superMan", function () {
    return {
        scope: {},
        restrict: "E",
        replace: true,
        transclude: true,
        template:
        "<div class='panel panel-default'>" +
            "<div class='panel-heading' ng-click='trigger()'>" +
                "<div class='input-group'>" +
                    "<span class='input-group-addon' ng-bind='title'></span>" +
                    "<input class='form-control' ng-model='value' type='text'>" +
                "</div>" +
            "</div>" +
            "<div class='panel-body' ng-show='show' ng-transclude></div>" +
            "<div class='panel-footer' ng-show='show' ng-bind='value'></div>" +
        "</div>",
        controller: function ($scope){
            $scope.value = 0;
            this.setTitle = function (title) {
                $scope.title = title;
            };
        },
        link: function (scope, element, attrs) {
            scope.show = false;
            scope.title = attrs.title;
            scope.trigger = function () {
                scope.show = !scope.show;
            };
        }
    }
});

myApp.directive("strength", function () {
    return {
        restrict: "A",
        require: "^superMan"
    }
});

myApp.directive("speed", function () {
    return {
        restrict: "A",
        require: "^superMan",
        link: function (scope, element, attrs, superCtrl) {
            superCtrl.setTitle("速度值：");
        }
    }
});

myApp.directive("agility", function () {
    return {
        restrict: "A",
        require: "^superMan"
    }
});