'use strict';

/* App Module */

var iday399App = angular.module('iday399App', [
  'ngRoute',
  'idayControllers',
  'idayFilters'
]);

iday399App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/companies', {
        templateUrl: 'views/company-list.html',
        controller: 'CompanyListController'
      }).
      when('/companies/:companyId', {
        templateUrl: 'views/company-details.html',
        controller: 'CompanyDetailsController'
      }).
      otherwise({
        redirectTo: '/companies'
      });
  }]);