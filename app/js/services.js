'use strict';

/* Services */

//http://stackoverflow.com/questions/19648345/angularjs-factory-only-called-once

//var idayServices = angular.module('idayServices', ['ngResource']);


/*
//  $http.get('data/week7grid.json').success(function(data) {
idayServices.factory('AllCompanies', ['$resource',
  function($resource){
    return $resource('data/week7grid.json', {}, {
      query: {method:'GET', params:{companyId:'companies'}, isArray:true}
    });
  }]);

/*
idayControllers.controller('CompanyListController', ['$scope', '$http', '$rootScope', //'$filter',
  function($scope, $http, $rootScope){ //$filter) {

  $http.get('data/week7grid.json').success(function(data) {
  $scope.companies = data;
  $rootScope.companies = data;


/*

'use strict';

/* Services 

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Company', ['$resource',
  function($resource){
    return $resource('companies/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'companies'}, isArray:true}
    });
  }]);


*/