// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('idayIonic', ['ionic', 'idayIonic.controllers', 'idayIonic.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    StatusBar.styleDefault();
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })

    // Each tab has its own nav history stack:

    // i feel like i you click on the icon you always want the list...
    .state('tab.companies', {
      url: '/companies',
      views: {
        'tab-companyListing': {
          templateUrl: 'tab-companies.html',
          controller: 'CompanyListCtrl'
        }
      }
    })
    .state('tab.company-detail', {
      url: '/company/:companyIdx',
      views: {
        'tab-companyListing': {
          templateUrl: 'company-detail.html',
          controller: 'CompanyDetailCtrl'
        }
      }
    })

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })


    // does this need its own history stack???
    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/companies');

});