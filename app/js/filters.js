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

	// SOMEHOW FEED IN THE CURRENTLY CHECKED BOXES
	// maybe this is a scope thing?
	return function(companies)
	{
		if (!angular.isUndefined(companies))
		{
			console.log('company list is defined');
			var tempCompanies = [];

			var chosenMajors = ['am', 'noneng']; //'cs',
			var chosenPositions = ['intern', 'fte'];
			// selectedMajor
			// .selectedPosition

			angular.forEach(companies, function(company, index){
				//console.log(index + ":" + company); // key + : + value

				for (var i = 0; i<chosenMajors.length; i++)
				{
					var major = chosenMajors[i];

					for(var j=0; j<chosenPositions.length; j++)
					{
						var position = chosenPositions[j];

						//if(company[chosenMajors[i]] && company[chosenPositions[j]])
						if(company[major] && company[position])
						{
							console.log(company.name + " " + chosenMajors[i] + " " + chosenPositions[j]);
							if(tempCompanies.indexOf(company) == -1)
								tempCompanies.push(company);
						}
					}
					// i should add in a break here so that once a company is added it continues...

				}
				/*
				chosenMajors.forEach(function(m){
					if(company[m])
					{
						console.log(company.name + ' has major ' + m);
						if(tempCompanies.indexOf(company) == -1)
							tempCompanies.push(company);
					}
					
				});

				chosenPositions.forEach(function(p){
					if(company[p])
					{
						console.log(company.name + ' has position/role ' + p);
						if(tempCompanies.indexOf(company) == -1)
							tempCompanies.push(company);
					}
					
				});*/
/*
				if(company.am)// && $scope.majors.selectedMajor name == 'am')
				{
					console.log('oh yeah applied math for '+ company.name)
					tempCompanies.push(company);
				}
				*/
			});
			
			
			return tempCompanies;
		}


		console.log('company list still undefined');
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