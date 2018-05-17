var app = angular.module("computer",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/main',{
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    }).
    when('/aws',{
      templateUrl: 'aws.html',
      controller: 'MainCtrl'
    }).
    when('/projects',{
      templateUrl: 'projects.html',
      controller: 'MainCtrl'
    }).
    when('/favorites',{
      templateUrl: 'favorites.html',
      controller: 'MainCtrl'
    }).
    otherwise({redirectTo: '/main'})
}])


.controller('MainCtrl', ['$scope','$http', function($scope, $http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}])

.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}])

.controller('ContactCtrl', ['$scope','$http', function($scope, $http){
  $http.get('locations.json').then(function(response){
    $scope.locations= response.data;
  });
}]);
