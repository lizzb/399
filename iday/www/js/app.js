


// Ionic Starter App
// angular.module is a global place 
// for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example 
// (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
//angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

angular.module('idayIonic', ['ionic', 'idayIonic.controllers', 'idayIonic.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
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
      templateUrl: 'templates/tabs.html',
    })

    // Each tab has its own nav history stack:

    // i feel like i you click on the icon you always want the list...

    .state('tab.companies', {
      url: '/companies',
      views: {
        'tab-companies': {
          templateUrl: 'templates/tab-companies.html', //'tab-companies.html'
          controller: 'CompanyListCtrl'
        }
      }
    })


    .state('tab.company-detail', {
      url: '/company/:companyId', //companyLoc' no cuz booth can change
      views: {
        'tab-companies': {        // onlya accessible if this is the start state...? not
          templateUrl: 'templates/company-detail.html', //'company-detail.html'
          controller: 'CompanyDetailCtrl'
        }
      }
    })


    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html', //'tab-dash.html'
          controller: 'DashCtrl'
        }
      }
    })

    // // does this need its own history stack???
    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tabs.html', //'tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/tab/dash');
  $urlRouterProvider.otherwise('/tab/companies');

});

