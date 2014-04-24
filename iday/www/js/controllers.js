angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('CompanyListCtrl', function($scope, Companies) {
  $scope.companies = Companies.all();
})

.controller('CompanyDetailCtrl', function($scope, $stateParams, Companies) {
  $scope.comp = Companies.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
