angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv){
    $scope.name = 'packagesCtrl';
    $scope.data = mainSrv.packageInfo;
})