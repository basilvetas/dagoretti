
app.controller('MainCtrl', ['$scope', 'Todos', function ($scope, Todos) {

  $scope.header = "Header";
  $scope.nav = "Nav";
  $scope.footer = "Footer";
  $scope.leftCol = "Left";
  $scope.rightCol = "Right";

  $scope.todos = Todos;

}]);

app.controller('NavCtrl', ['$scope', function ($scope) {

	$scope.menu = [
		{ title: "About", link: "#about" },
		{ title: "Donate", link: "#donate"},
		{ title: "Students", link: "#students"},
		{ title: "Staff", link: "#staff"},
		{ title: "Contact", link: "#contact"}
	];
    
}]);

app.controller('FooterCtrl', ['$scope', function ($scope) {

	$scope.date = new Date();
    
}]);

app.controller('CarouselCtrl', ['$scope', function ($scope) {

	$scope.interval = 3000;
  $scope.slides = [
    { image: 'imgs/dagoretti-11.jpg', text: "first" },
    { image: 'imgs/dagoretti-12.jpg', text: "second" },
    { image: 'imgs/dagoretti-13.jpg', text: "third"},
    { image: 'imgs/dagoretti-14.jpg', text: "fourth"}
  ];
    
}]);

app.controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', function ($scope, $routeParams, Todos) {
  $scope.todo = Todos[$routeParams.id];
}])