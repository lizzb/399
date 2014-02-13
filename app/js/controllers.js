'use strict';

/* Controllers */


var idayControllers = angular.module('idayControllers', []);

idayControllers.controller('CompanyListController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/companyGrid.json').success(function(data) {
      $scope.companies = data;
    });

    var categories = ['ft', 'int', 'coop', 'msphd'];
    $scope.filters = [];
    //$scope.selectedFilter = [];
    $scope.orderProp = 'name';

/*
    $scope.selectedGenres = "Action, Drama"; 

$scope.containsComparator = function(expected, actual){  
  return actual.indexOf(expected) > -1;
};*/
    $scope.filterByPosition = function(category){scope.filters.push(category);}

    //http://jsfiddle.net/TahmidTanzim/N9Vqk/
    //  ($scope) {
    /*$scope.setSelectedFilter = function (input) {
        //var id = this.company.id;
        var id = input;
        if (_.contains($scope.selectedFilter, id)) {
            $scope.selectedFilter = _.without($scope.selectedFilter, id);
        } else {
            $scope.selectedFilter.push(id);
        }
        return false;
    };*/

    /*$scope.isChecked = function (id) {
        if (_.contains($scope.selectedFilter, id)) {
            return 'icon-ok pull-right';
        }
        return false;
    };*/
  }]);


/*
$http.get('phones/full-phones.json').success(function(data){

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);
*/

// positive theres a more efficient way to do this....

idayControllers.controller('CompanyDetailsController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/companyGrid.json').success(function(data){
        
        angular.forEach(data, function(item) {
          if (item.booth == $routeParams.companyId) 
          {
            $scope.company = item;
            $scope.mainImageUrl = item.logoFull;
          }    
        });

        /*
        $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
       
      }*/
    });
     
  }]);




// http://stackoverflow.com/questions/14857739/angular-js-detailed-view-with-only-one-json




/*
Use an Angular filter on your view
(there's no need to filter the data on the service):

<div ng-repeat="entry in playgrounds | filter:{id: 1}">
    <p>properties: {{entry.properties}}</p>
    <p>lat: {{entry.lat}}</p>
    <p>lon: {{entry.lon}}</p>
</div>

	http://jsfiddle.net/bmleite/Ad6u9/
 	
And if you want to filter your view on a $routeParams parameter, 
add this to your controller: 
$scope.myParam = $routeParams.parameterNameFromRouteController; 
and then in your view,
modify the filter to be: 
<div ng-repeat="entry in playgrounds | filter:{id: myParam}"> 
<p>properties: {{entry.properties}}</p> 
<p>lat: {{entry.lat}}</p> 
<p>lon: {{entry.lon}}</p> 
</div> –  Matty J Feb 27 '13 at 3:31


*/