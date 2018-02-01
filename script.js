var app = angular.module("computer",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/about',{
      templateUrl: 'about.html',
      controller: 'MainCtrl'
    }). 
    when('/aws',{
      templateUrl: 'aws.html',
      controller: 'MainCtrl'
    }).
    when('/unity',{
      templateUrl: 'unity.html',
      controller: 'ServicesCtrl'
    }).
    when('/sharepoint',{
      templateUrl: 'sp.html',
      controller: 'ContactCtrl'
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
