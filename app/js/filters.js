'use strict';

/* Filters */

angular.module('idayFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});


/*
<i class="fa iconname"></li>
<i class="fa fa-sort-alpha-asc"></i>
<i class="fa fa-sort-alpha-desc"></i>
<i class="fa fa-sort-numeric-asc"></i>
        <i class="fa fa-sort-numeric-desc"></i>
        <i class="fa fa-sort"> </i>
        <i class="fa fa-sort-asc"> </i>
        <i class="fa fa-sort-desc"> </i>
        <i class="fa fa-sort-amount-asc"> </i>
        <i class="fa fa-sort-amount-desc"> </i>
        <i class="glyphicon glyphicon-sort"></i>
        */