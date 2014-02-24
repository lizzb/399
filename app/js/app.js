'use strict';

/* App Module */

var iday399App = angular.module('iday399App', [
  'ngRoute',
  'idayControllers',
  'idayFilters'
]);

iday399App.config(['$routeProvider', //'$locationProvider'
  function($routeProvider/*, $locationProvider*/) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/landing-page.html',
        controller: 'LandingPageController'
      }).
      when('/companies', {
        templateUrl: 'views/company-list.html',
        controller: 'CompanyListController'
      }).
      when('/companies/:companyId', {
        templateUrl: 'views/company-details.html',
        controller: 'CompanyDetailsController'
      }).
      when('/map/companies', { // /companies
        templateUrl: 'views/floorplan.html',
        controller: 'CompanyListLocationController'
      }).
      when('/map/:companyId', {
        templateUrl: 'views/floorplan.html',
        controller: 'CompanyLocationController'
      }).
      when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'UserSettingsFiltersController'
      }).
      when('/credits', {
        templateUrl: 'views/credits.html',
        controller: 'AcknowledgementsController'
      }).
      when('/feedback', {
        templateUrl: 'views/feedback-survey.html',
        controller: 'FeedbackSurveyController'
      }).
      when('/favorites', {
        templateUrl: 'views/settings.html', //.....
        controller: 'FavoritesController'
      }).
      otherwise({
        redirectTo: '/' //'/app/' // "home" page
      });

// http://scotch.io/quick-tips/js/angular/pretty-urls-in-angularjs-removing-the-hashtag
      // use the HTML5 History API
   // $locationProvider.html5Mode(true);
  }]);

// floorplan.html

/*
landing page
- feedback
- about
- favorites (edit?)

quick access
- filtered list
- filtered map

drop down collapse menu
- user settings
-favorites
- home?
-recruiters
- feedback?



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
      when('/map/companies', { // /companies
        templateUrl: 'views/floorplan.html',
        controller: 'CompanyListLocationController'
      }).
      when('/map/:companyId', {
        templateUrl: 'views/floorplan.html',
        controller: 'CompanyLocationController'
      }).
      when('/settings', {
        templateUrl: 'views/filter-settings.html',
        controller: 'CompanyListController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

// floorplan.html
*/