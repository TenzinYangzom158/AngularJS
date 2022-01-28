//1 . define module name
//2. define name of the controller
//3. define layout -> MODEL (can be json)
angular.module("Mca",[])  //VIEW
.controller("Mcactrl",function($scope)  // CONTROLLER
{
    //MODEL
    $scope.firstName = "Tenzin";
    $scope.lastName = "Yangzom"
});