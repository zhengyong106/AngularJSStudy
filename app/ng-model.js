var myapp = angular.module('myApp', []);

myapp.controller('MyController', function ($scope, $rootScope) {
    $rootScope.name = "AngularJS";
    $scope.dict = {
        name: "AngularJS"
    };
    $scope.list = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
    $scope.sayHello = function () {
      return "Hello " + $rootScope.name;
    };
});