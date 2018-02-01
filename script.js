var app = angular.module("computer",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/About',{
      templateUrl: 'about.html',
      controller: 'MainCtrl'
    }). 
    when('/AWS',{
      templateUrl: 'aws.html',
      controller: 'MainCtrl'
    }).
    when('/Unity',{
      templateUrl: 'unity.html',
      controller: 'ServicesCtrl'
    }).
    when('/SharePoint',{
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
