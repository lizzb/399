angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('CompanyListCtrl', function($scope, Companies) {
  $scope.companies = Companies.all();
})

.controller('CompanyDetailCtrl', function($scope, $stateParams, Companies) {
  $scope.company = Companies.get($stateParams.companyId); // this is BOOTH no jk
  // where the syntax tab.(whatever) comes from
})

.controller('AccountCtrl', function($scope) {
});
