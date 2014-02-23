'use strict';


/* Controllers */
// http://jsfiddle.net/Ln26K/

// $http.get('data/companyGrid.json').success(function(data) {

var idayControllers = angular.module('idayControllers', []);

//http://jsfiddle.net/natefriedman/3XT3F/1/

idayControllers.controller('CompanyListController', ['$scope', '$http', '$rootScope', '$filter',
  function($scope, $http, $rootScope, $filter) {

$rootScope.positions = [ //$scope.positions = [
  { friendlyName: 'Full Time', name: 'fte'},
  { friendlyName: 'Intern', name: 'int' },
  { friendlyName: 'Co-Op', name: 'coop' },
  { friendlyName: 'MS/PhD', name: 'msphd'}
];
    
    
 $rootScope.majors = [ //$scope.majors = [
      { friendlyName: 'Applied Math', name: 'am'},
      { friendlyName: 'Biomedical', name: 'bme'},
      { friendlyName: 'Chemical', name: 'chem'},
      { friendlyName: 'Civil', name: 'civil'},
      { friendlyName: 'Computer', name: 'ce'},
      { friendlyName: 'CompSci', name: 'cs'},
      { friendlyName: 'Electrical', name: 'ee'},
      { friendlyName: 'Environmental', name: 'enve'},
      { friendlyName: 'Industrial', name: 'ie'},
      { friendlyName: 'MaDE', name: 'made'},
      { friendlyName: 'Material Science', name:'matsci' },
      { friendlyName: 'Mechanical', name: 'mech' },
      { friendlyName: 'Non-engineering', name: 'noneng' }
    ];


    $http.get('data/week7grid.json').success(function(data) {
      $scope.companies = data;
      $rootScope.companies = data;
});

 /*// yeah pretty sure i'm using rootscope in a totally non angular way but whateeevvsvss
$rootScope.selectedMajors = function selectedMajors() {
  var temp = [];
   angular.forEach(majors, function(m) {
      if (m.selectedMajor) temp.push(m.name);        
  });
   return temp;
  //return filterFilter($scope.majors, { selectedMajor: true });
};
    

// helper method for adding checkboxes
$rootScope.selectedPositions = function selectedPositions() {
  var temp = [];
   angular.forEach(positions, function(m) {
      if (m.selectedPosition) temp.push(m.name);        
  });
   return temp;
  //return filterFilter($scope.positions, { selectedPosition: true });
};*/
console.log('rootscope M: '+$rootScope.majors);
$filter('companyFilter')($rootScope.majors, $rootScope.positions); //, $rootScope);


//$filter('companyFilter')($rootScope.selectedMajors, $rootScope.selectedPositions);
    

/*
function CompanyListController($scope, $http, $rootScope) {
    $http.get('data/week7grid.json').success(function(data) {
      $scope.companies = data;

    });*/

 // helper method for adding checkboxes



/*

$rootScope.positions = [ //$scope.positions = [
  { friendlyName: 'Full Time', name: 'fte'},
  { friendlyName: 'Intern', name: 'int' },
  { friendlyName: 'Co-Op', name: 'coop' },
  { friendlyName: 'MS/PhD', name: 'msphd'}
];
    
    
 $rootScope.majors = [ //$scope.majors = [
      { friendlyName: 'Applied Math', name: 'am'},
      { friendlyName: 'Biomedical', name: 'bme'},
      { friendlyName: 'Chemical', name: 'chem'},
      { friendlyName: 'Civil', name: 'civil'},
      { friendlyName: 'Computer', name: 'ce'},
      { friendlyName: 'CompSci', name: 'cs'},
      { friendlyName: 'Electrical', name: 'ee'},
      { friendlyName: 'Environmental', name: 'enve'},
      { friendlyName: 'Industrial', name: 'ie'},
      { friendlyName: 'MaDE', name: 'made'},
      { friendlyName: 'Material Science', name:'matsci' },
      { friendlyName: 'Mechanical', name: 'mech' },
      { friendlyName: 'Non-engineering', name: 'noneng' }
    ];

    */

    
}]);


// http://stackoverflow.com/questions/14857739/
// angular-js-detailed-view-with-only-one-json


// positive theres a more efficient way to do this....
// should load full list once, store it
// store a currently filtered verison
// and just pass the relevant item from the list of companies
// to the scope of the details


// need a factory i think but services were being weird
/*
idayControllers.controller('CompanyDetailsController', ['$rootScope', '$routeParams',
  function($rootScope, $routeParams){
   $rootScope.company = $routeParams.companyId;
  }])
*/
/*idayControllers.controller('CompanyDetailsController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/week7grid.json').success(function(data){
        
        angular.forEach(data, function(comp) {
          // if (item.booth == $routeParams.companyId)
          if (comp.id == $routeParams.companyId) 
          {
            $scope.company = comp;
            // $scope.phoneId = $routeParams.phoneId;
          }    
        });
    });
     
  }]);*/

// not sure if i HAVE to feed in rootscope or if i can do this some better way?
// stil dont undrestnd scopes


idayControllers.controller('CompanyDetailsController', ['$scope', '$routeParams', '$rootScope',
  function($scope, $routeParams, $rootScope){
    angular.forEach($rootScope.companies, function(comp) {
          if (comp.id == $routeParams.companyId) 
          {
            $scope.company = comp;
          }    
        });
    $scope.majors = $rootScope.majors;
    $scope.jobs = $rootScope.positions; // pass from a diff scope??
    // both jobs and positions work, both are accessible from within companydetails
  }])



/*
–  Matty J Feb 27 '13 at 3:31
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

and then in your view, modify the filter to be: 
<div ng-repeat="entry in playgrounds | filter:{id: myParam}"> 
<p>properties: {{entry.properties}}</p> 
<p>lat: {{entry.lat}}</p>
<p>lon: {{entry.lon}}</p> 
</div>
*/

/* ORIGINAL FROM PHONECAT for phone details

$http.get('phones/full-phones.json').success(function(data){
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);
*/


idayControllers.controller('CompanyListLocationController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    //$scope.phoneId = $routeParams.phoneId;
  }]);

// disable links if not loaded yet?

idayControllers.controller('CompanyLocationController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    //$scope.companyId = $routeParams.phoneId;
  }]);







