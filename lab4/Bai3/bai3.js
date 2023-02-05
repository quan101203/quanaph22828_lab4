var app = angular.module("myapp", []);
app.controller("myctrl", function($scope){
    $scope.info = [{
        "ten":"Nguyễn Anh Quân",
        "ngaysinh":"10/12/2003",
        "gioitinh":"nam",
        "photo":"photo.jpg",
        "avg":8
    },{
        "ten":"Đỗ Xuân Thành",
        "ngaysinh":"23/11/2003",
        "gioitinh":"nam",
        "photo":"photo.jpg",
        "avg":9
    },{
        "ten":"Lê Văn Tuấn",
        "ngaysinh":"01/12/2003",
        "gioitinh":"nam",
        "photo":"photo.jpg",
        "avg":9.5
    }];

    $scope.count = 0;
$scope.myFunc = function(){
    $scope.count++;
};

$scope.sayHello = function(){
    $scope.abcd =$scope.test;
}
});

