'use strict';

/* Filters */

// Define a new module for our app. 
// The array holds the names of dependencies if any.

var app = angular.module('idayFilters', []);


// All filters must return a function.
// Param 1: the data to be filtered, 
// Param 2: an argument that may be passed 
// http://tutorialzine.com/2013/08/learn-angularjs-5-examples/

app.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});