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
    when('/unity',{
      templateUrl: 'unity.html',
      controller: 'MainCtrl'
    }).
    when('/hack',{
      templateUrl: 'hack.html',
      controller: 'MainCtrl'
    }).
    otherwise({redirectTo: '/main'})
}])


.controller('MainCtrl', ['$scope','$http', function($scope, $http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}])

.controller('MainCtrl', ['$scope','$http', function($scope, $http){
  $http.get('locations.json').then(function(response){
    $scope.locations= response.data;
  });
}]);
