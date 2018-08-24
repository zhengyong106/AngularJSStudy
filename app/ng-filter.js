var filterApp = angular.module("filterApp", []);

filterApp.filter("upperCaseFilter", function () {
    return function (item) {
        if(item){
            return String(item).toUpperCase();
        }
    }
});