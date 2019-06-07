// Create a Module
let app = angular.module('HBApp',[]);

// Create a Controller
app.controller('HBAppCtrl',function($scope) {
    $scope.eating = null;
    $scope.coding = null;
    $scope.sleeping = null;
});
