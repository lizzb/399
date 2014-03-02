'use strict';

/* Controllers */

var idayControllers = angular.module('idayControllers', []);

// disable links to company details if not loaded yet...? how to handle

// http://andru.co/building-a-simple-single-page-application-using-angularjs#json
// We should only load the JSON file once, 
// cache it to a variable 
//and access the variable when we need the data. 
// Let's use Angular's $http service to grab the JSON file. 
// To use the $http service we will need to pass it as an argument to the AppController.

function AppController ($scope, $rootScope, $http) {
  // Load pages on startup
  //$http.get('/pages.json').success(function (data) {
  $http.get('data/week7grid.json').success(function(data) {
    //$rootScope.pages = data;
    $rootScope.all_companies = data;
    console.log('data loaded');
    // We are also passing in $rootScope which all scopes inherit from.
    // We do this so this so that we can access the pages JSON data in our RouteController. 
  });

    //$scope.positions = [
  $rootScope.positions = [ 
      { friendlyName: 'Full Time', name: 'fte'},
      { friendlyName: 'Intern', name: 'intern' },
      { friendlyName: 'Co-Op', name: 'coop' },
      { friendlyName: 'MS/PhD', name: 'msphd'}
  ];
    
    //$scope.majors = [   
    $rootScope.majors = [ 
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
}

idayControllers.controller('LandingPageController', 
  ['$scope', 
  function($scope) {
    //$scope.phoneId = $routeParams.phoneId;
  }]);

/* 
// Goal: load http only ONCE max - maybe even js array if thats okay? Vs json
// load full list once, store it
// store a currently filtered verison list of companies
// and just pass the relevant item from the list of companies
// to the scope of the details
// pass the filtered list info relevant to the map to that as well

// http://stackoverflow.com/questions/14857739/
// angular-js-detailed-view-with-only-one-json

// i think a factory service, or maybe just passing scope differently?
// (stil dont understand scopes entirely)
*/
// idayControllers.controller('CompanyListController', ['$scope', '$http', '$rootScope', //'$filter',


idayControllers.controller('CompanyListController', ['$scope','$rootScope', //'$filter',
  function($scope, $rootScope){ //$filter) {

 // $http.get('data/week7grid.json').success(function(data) {
  //  one way to communicate between controllers using the $rootScope
  $scope.companies = $rootScope.all_companies; //data;
  //$rootScope.companies = data;



//}]);


    $scope.majorsIncluded = [];
    $scope.positionsIncluded = [];

    $scope.includeMajor = function (color) {
        var i = $scope.majorsIncluded.indexOf(color);
        if (i > -1) { $scope.majorsIncluded.splice(i, 1); } 
        else { $scope.majorsIncluded.push(color); }
    }
    
     $scope.includePosition = function (color) {
        var i = $scope.positionsIncluded.indexOf(color);
        if (i > -1) { $scope.positionsIncluded.splice(i, 1); } 
        else { $scope.positionsIncluded.push(color); }
    }


$scope.userFilter = function (company) {
        
        var includedPositions= $scope.positionsIncluded;
        var includedMajors = $scope.majorsIncluded;
        
        if($scope.majorsIncluded.length <= 0 && $scope.positionsIncluded.length <= 0)
            return company;
        
        if($scope.positionsIncluded.length <= 0)
          includedPositions = ["fte","intern","coop","msphd"];
            
        if($scope.majorsIncluded.length <= 0)
          includedMajors = ["am","bme","chem","civil","ce","cs","ee","enve","ie","made","matsci","mech","noneng"];
        

        
        for (var i = 0; i < includedPositions.length; i++)
        {
            // check if a position is true
            if(company[includedPositions[i]])
            {
                // must have at least one of these true as well
                for (var j = 0; j < includedMajors.length; j++)
                {
                    if(company[includedMajors[j]]) return company;
                }
            }
            
        }
        return;
    }


     // $filter('companyFilter')($rootScope.majors, $rootScope.positions);
 }]);   


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
    // both jobs and positions work,
    // both are accessible from within companydetails
  }])



idayControllers.controller('CompanyListLocationController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    //$scope.phoneId = $routeParams.phoneId;
  }]);



idayControllers.controller('CompanyLocationController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    //$scope.companyId = $routeParams.phoneId;
  }]);


idayControllers.controller('FavoritesController', 
  ['$scope',
  function($scope) {
    //$scope.phoneId = $routeParams.phoneId;
  }]);

idayControllers.controller('FeedbackSurveyController', 
  ['$scope',
  function($scope) {
    //$scope.phoneId = $routeParams.phoneId;
  }]);

idayControllers.controller('UserSettingsFiltersController', 
  ['$scope',
  function($scope) {
    //$scope.phoneId = $routeParams.phoneId;
  }]);

idayControllers.controller('AcknowledgementsController', 
  ['$scope',
  function($scope) {
    //$scope.phoneId = $routeParams.phoneId;
  }]);







     // scopes fiddle
    //http://jsfiddle.net/natefriedman/3XT3F/1/

 // helper method for adding checkboxes

 // yeah pretty sure i'm using rootscope in a totally wrong
 // non angular way but whateeevvsvss
/*

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
  //return filterFilter($scope.positions, { selectedPosition: true });
};*/



