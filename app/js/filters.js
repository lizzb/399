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

app.filter('companyFilter', function() {
	return function(companies)
	{
		
		if (!angular.isUndefined(companies))
		{
			console.log('yay!');
			//var log = [];
			angular.forEach(companies, function(value, index){
				console.log(index + ":" + value);
				console.log(value.name);
				//this.push(key + ": " + value);
			});
			//, log); //(var i = 0; i < 84; i++)
			/*{
				//console.log(companies[i].name);
				console.log(c.name);
			}*/
			//console.log;

		}
/*
		var tempCompanies = [];
		for(var c in companies)
		{
			tempCompanies.push(c);
		}
		/*angular.forEach(companies, function (company)
		{
			
			tempCompanies.push(company);
		}*
		return tempCompanies; //companies; //return (company.ce =="1");
		}
		return false;
		*/

		//console.log(companies + "hey");
		return companies;
	};
});

/*
 // helper method for adding checkboxes
$scope.selectedMajors = function selectedMajors() {
  return filterFilter($scope.majors, { selectedMajor: true });
};
    

// helper method for adding checkboxes
$scope.selectedPositions = function selectedPositions() {
  return filterFilter($scope.positions, { selectedPosition: true });
};
*/