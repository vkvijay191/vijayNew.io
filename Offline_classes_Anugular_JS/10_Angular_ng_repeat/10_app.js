// Create a Module
let app = angular.module('GMApp',[]);

// Create a Controller
app.controller('GMAppCtrl',function($scope) {
    $scope.username = null;
    $scope.times = null;
    $scope.timeNumber = null;
    $scope.wishMessage = null;
    $scope.timesArray = [];
    $scope.getTimes = function() {
        if($scope.times !== null){
            $scope.timesArray = [];
            for(let i =  0; i<$scope.times; i++){
                $scope.timesArray[i] = (i+1);
            }
        }
        else{
            $scope.timesArray = [];
        }
    };
    $scope.getWishMessage = function() {
        if($scope.timeNumber !== null){
            if($scope.timeNumber <= 12){
                $scope.wishMessage = 'Good Morning';
            }
            else if($scope.timeNumber >12 && $scope.timeNumber <= 17){
                $scope.wishMessage = 'Good Afternoon';
            }
            else if($scope.timeNumber >17 && $scope.timeNumber <= 23){
                $scope.wishMessage = 'Good Evening';
            }
            else{
                $scope.wishMessage = 'Please Enter Proper Time';
            }
        }
        else{
            $scope.wishMessage = '';
        }
    };
});