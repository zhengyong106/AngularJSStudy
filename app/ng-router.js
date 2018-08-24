/*注入ngRoute依赖*/
angular.module("myApp", ['ngRoute'])
    .controller("homeController", function ($scope, $route) {
        $scope.textColor = "text-primary";
    })
    .controller("computerController", function ($scope, $route) {
        $scope.textColor = "text-warning";
    })
    .controller("printerController", function ($scope, $route) {
        $scope.textColor = "text-info";
    })
    .controller("otherController", function ($scope, $route) {
        $scope.textColor = "text-danger";
    })
    /*配置routeProviter*/
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/home',{
                template:'这是首页页面',
                controller: "homeController"})
            .when('/computer',{
                template:'这是电脑分类页面',
                controller: "computerController"})
            .when('/printer',{
                template:'这是打印机页面',
                controller: "printerController"})
            .when('/other',{
                template:'这是其他页面',
                controller: "otherController"})
            .otherwise({redirectTo:'/other'});
    }])