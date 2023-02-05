
var app = angular.module("myapp", []);
app.controller("myctrl", myInfor) ;


function myInfor($scope){
    $scope.ten = "Nguyễn Anh Quân";
    $scope.ngaysinh = "10/12/2003";
    $scope.gioitinh = "Nam";
    $scope.photo = "photo.jpg";
    $scope.avg = 8;
}
  