// Create a Module
let app = angular.module('TodoApp',[]);

// Create a Controller
app.controller('TodoAppCtrl',function($scope) {
    $scope.item = null;
    $scope.items = [];
    $scope.editMode = false;
    $scope.addItem = function() {
      if($scope.item !== null){
          // if not Exists
          if($scope.items.indexOf($scope.item.toUpperCase()) === -1){
              $scope.items.push($scope.item.toUpperCase());
              $scope.item = null;
          }
          else{
              alert(` Dude! ${$scope.item.toUpperCase()} already Exists `);
              $scope.item = null;
          }
      }
      else{
          alert(`Dude Enter at least one item`);
      }
    };
    $scope.ONEditMode = function() {
      $scope.editMode = true;
    };
    $scope.OFFEditMode = function() {
      $scope.editMode = false;
    };
    $scope.deleteItem = function(index) {
      $scope.items.splice(index,1);
    };
    $scope.replaceItem = function(index,item) {
      $scope.items.splice(index,1,item);
    };
});