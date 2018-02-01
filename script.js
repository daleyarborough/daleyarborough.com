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
      controller: 'MainCtrl'
    }).
    when('/sharepoint',{
      templateUrl: 'sharepoint.html',
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
}]);
