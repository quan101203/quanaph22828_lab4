var app = angular.module("myapp", []);
app.controller("myctrl", function($scope){
    $scope.info = {
        "ten":"Nguyễn Anh Quan",
        "ngaysinh":"23/11/2003",
        "gioitinh":"nam",
        "photo":"photo.jpg",
        "avg":8
    };
});