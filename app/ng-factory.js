var factoryApp = angular.module("factoryApp", []);
factoryApp.factory("testFactory", ["$http",
    function ($http) {
        var doGet = function (path) {
            console.log("Post request url: " + path);
            return $http({
                method: "GET",
                url: path
            });
        };
        return {
            userList: function (username) {
                return doGet('ng-factory.json?username=' + username)
            }
        };
    }
]);
factoryApp.controller("factoryController", ["$scope", "$timeout", "testFactory", function ($scope, $timeout, testFactory) {
    var timeout;
    $scope.$watch('username', function (newUsername) {
        // 判断newUserName是否定义
        if(newUsername){
            // 如果用户继续输入内容，且输入未超时，那么清零计时器
            if(timeout){
                $timeout.cancel(timeout);
            }
            // 如果用户输入超时，那么执行调用方法
            timeout = $timeout(function () {
                testFactory.userList(newUsername)
                    .success(function (data, status, headers, config) {
                        $scope.users = data;
                    });
                }
            , 500);
        }
    });
}]);