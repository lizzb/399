'use strict';

/* Filters */

// Define a new module for our app. 
// The array holds the names of dependencies if any.

var app = angular.module('idayFilters', []);

app.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});


// http://tutorialzine.com/2013/08/learn-angularjs-5-examples/

// All filters must return a function.
// The first parameter is the data that is to be filtered, 
// and the second is an argument that may be passed 
// with a colon (searchFor:searchString) filterPostion:position


// http://jsfiddle.net/TahmidTanzim/N9Vqk/
// company and client with underscore example
