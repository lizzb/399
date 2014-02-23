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

//http://stackoverflow.com/questions/17596246/access-scope-variables-from-a-filter-in-angularjs


app.filter('companyFilter', function() {

	// SOMEHOW FEED IN THE CURRENTLY CHECKED BOXES
	// maybe this is a scope thing?
	return function(companies, selectedMajors, selectedPositions)
	//return function(companies)
	{


		var tempCompanies = [];
		var chosenMajors = []; //selectedMajors; //[];
		var chosenPositions = []; //selectedPositions; //[];

		if(angular.isUndefined(companies) || angular.isUndefined(selectedMajors) || angular.isUndefined(selectedPositions))
		{
			console.log('companies undefined: '+ angular.isUndefined(companies)+ '  selMajs undefined:'+angular.isUndefined(selectedMajors)+'  selPos undefined:'+angular.isUndefined(selectedPositions));
			//return companies;
		}
		//else
		

		if (!angular.isUndefined(companies))
		{
			console.log('company list is defined');
			//console.log('rootscope M: '+$rootScope.selectedMajors);

			if (!angular.isUndefined(selectedMajors))
			{
			console.log('-- MAJORS defined-- ');
			chosenMajors = selectedMajors;
			}
			
			if (!angular.isUndefined(selectedPositions))
			{
			console.log('-- POSITIONS defined --');
			chosenPositions = selectedPositions; 
			}
			//var chosenMajors = $rootScope.selectedMajors; //['am', 'noneng']; //'cs',
			//var chosenPositions = $rootScope.selectedPositions; //['intern', 'fte'];
			// selectedMajor
			// .selectedPosition
			//if($scope.majors.selectedMajor) chosenMajors.push()

			/*
			$rootScope.selectedMajors = function selectedMajors() {
  var temp = [];
   angular.forEach(majors, function(m) {
      if (m.selectedMajor) temp.push(m.name);        
  });
   return temp;
  //return filterFilter($scope.majors, { selectedMajor: true });
};*/
			/*
			if (!angular.isUndefined(majors))
			{
				angular.forEach(majors, function(major, index)
			{
				if(major.selectedMajor)
				{
					chosenMajors.push(major.name);
				}
			});
			}**/
			
			//console.log('majors' + selectedMajors);

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



