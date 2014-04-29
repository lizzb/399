angular.module('idayIonic.controllers', ['ionic', 'ionic.contrib.frostedGlass'])

// ---------------------------------------------------------------- //


.controller('DashCtrl', function($scope) {})


// ---------------------------------------------------------------- //


.controller('CompanyListCtrl', function($scope, /*$ionicFrostedDelegate, $ionicScrollDelegate,*/ AllCompanies) {
  $scope.all_companies = AllCompanies.all();
  
  $scope.companies = AllCompanies.all();

  // Update the scroll area and tell the frosted glass to redraw itself
  //$ionicFrostedDelegate.update();
  //$ionicScrollDelegate.scrollBottom(true);

})

// idayControllers.controller('CompanyDetailsController', 
//['$scope', '$routeParams', '$rootScope',
//  function($scope, $routeParams, $rootScope){
.controller('CompanyDetailCtrl', function($scope, $stateParams, AllCompanies) {
  $scope.company = AllCompanies.get($stateParams.companyIdx);
  // simple way to match by name instead of index? 
  // or display id name in url but get by index? idk

  /*
    angular.forEach($rootScope.all_companies, function(comp) {
          if (comp.id == $routeParams.companyId) { $scope.company = comp; }    
        });
  }])
*/

})


// ---------------------------------------------------------------- //


.controller('AccountCtrl', function($scope) {


  $scope.positions = [ 
      { friendlyName: 'Full Time', name: 'fte'},
      { friendlyName: 'Intern', name: 'intern' },
      { friendlyName: 'Co-Op', name: 'coop' },
      { friendlyName: 'MS/PhD', name: 'msphd'}
  ];

   $scope.majors = [
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
  
  // what is initially checked radio button value
 $scope.data = { selectedMajors: 'ie' }; // dont understand this too much
 
 //$scope.selection = [];
 $scope.selectedPositions = []; //{ checked: true };
 
/*
<!--
- use `value="{{fruit.name}}"` to give the input a real value, in case the form gets submitted
 traditionally

- use `ng-checked="fruit.selected"` to have the checkbox checked based on some angular expression
(no two-way-data-binding)

- use `ng-model="fruit.selected"` to utilize two-way-data-binding. 
Note that `.selected` is arbitrary. 
The property name could be anything and will be created on the object if not present.
-->

 
  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };
  $scope.pushNotification = { checked: true };
  $scope.emailNotification = 'Subscribed';
  */
});

// ---------------------------------------------------------------- //

   //$scope.devList
  //$scope.majors =  vs $rootScope.majors = [ 
  
  /*
    //$scope.positions = [
    //$rootScope.positions = [ 
    $rootScope.majorsIncluded = []; 
    $rootScope.positionsIncluded = []; 
    //$scope.majorsIncluded = [];
    //$scope.positionsIncluded = [];
  */



/*
// Also passing in $rootScope which all scopes inherit from.
function AppController ($scope, $rootScope, $http) {
  $http.get('data/week9grid.json').success(function(data) {
    console.log('data loaded');
    $rootScope.all_companies = data;
    $rootScope.filteredList = data;
  });

   
}
*/
/*

idayControllers.controller('CompanyListController', ['$scope','$rootScope',
  function($scope, $rootScope){ 

  //  one way to communicate between controllers using the $rootScope
  $scope.companies = $rootScope.all_companies;


    //$scope.includeMajor = 
    $rootScope.includeMajor = function (color) {
        var i = $scope.majorsIncluded.indexOf(color);
        if (i > -1) { $scope.majorsIncluded.splice(i, 1); } 
        else { $scope.majorsIncluded.push(color); }
    }
    
     //$scope.includePosition = 
     $rootScope.includePosition = function (color) {
        var i = $scope.positionsIncluded.indexOf(color);
        if (i > -1) { $scope.positionsIncluded.splice(i, 1); } 
        else { $scope.positionsIncluded.push(color); }
    }
   */