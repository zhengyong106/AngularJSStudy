var myApp = angular.module("myApp", []);
myApp.controller("myController", function($scope){
    var themeList = ["primary", "success", "info", "warning", "danger"];

    $scope.theme = themeList[Math.floor(Math.random()*themeList.length)];
    $scope.switchTheme = function () {
        $scope.theme = themeList[Math.floor(Math.random()*themeList.length)];
    };
});
