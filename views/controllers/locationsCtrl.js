angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){
    $scope.name = 'locationsCtrl';
    $scope.travelInfo = mainSrv.travelInfo;
})