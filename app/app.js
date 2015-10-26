app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/main.html',
      controller: 'MainCtrl'
    })
    .when('/:id', {
      templateUrl: '/templates/todoDetails.html',
      controller: 'TodoDetailCtrl' 
    });
}]);












