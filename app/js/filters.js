'use strict';

/* Filters */

// Define a new module for our app. The array holds the names of dependencies if any.

var app = angular.module('idayFilters', []);

app.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

app.filter('majorFilter', function () {
    return function (companies, selectedMajor) {
        if (!angular.isUndefined(companies) && !angular.isUndefined(selectedMajor) && selectedMajor.length > 0) {
            var tempCompanies = [];
            angular.forEach(selectedMajor, function (id) {
                // need to iterate through a list not just 1
                angular.forEach(companies, function (company) {
                    if (angular.equals(company.major.id, id)) {
                        tempCompanies.push(company);
                    }
                });
            });
            return tempCompanies;
        } else {
            return companies;
        }
    };
});

/*
app.filter('majorFilter', [function () {
    return function (companies, selectedMajor) {
        if (!angular.isUndefined(companies) && !angular.isUndefined(selectedMajor) && selectedMajor.length > 0) {
            var tempCompanies = [];
            angular.forEach(selectedMajor, function (id) {
                angular.forEach(companies, function (company) {
                    if (angular.equals(company.major.id, id)) {
                        tempCompanies.push(company);
                    }
                });
            });
            return tempCompanies;
        } else {
            return companies;
        }
    };
}]);
*/

// http://tutorialzine.com/2013/08/learn-angularjs-5-examples/
    // All filters must return a function. 
    // The first parameteris the data that is to be filtered, 
    // and the second is an argument that may be passed 
    // with a colon (searchFor:searchString) filterPostion:position
    
/*app.filter('filterByPosition', function(){

return function(arr, positionFilter){

        if(!positionFilter){
            return arr;
        }

        var result = []; // filtered array

        //positionFilter = positionFilter.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(company){

            if(company.position.indexOf(positionFilter) !== -1){
                result.push(company);
            }

        });

        return result;
    };

});*/

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

        /*

        http://jsfiddle.net/TahmidTanzim/N9Vqk/
angular.module('idayFilters', []).filter('positionFilter', [function () {
    return function (companies, selectedFilter) {
        if (!angular.isUndefined(companies) && !angular.isUndefined(selectedFilter) && selectedFilter.length > 0) {
            var filteredCompanies = [];
            angular.forEach(selectedFilter, function (id) {
                /*angular.forEach(companies, function (companies) {
                    if (angular.equals(client.company.id, id)) {*
                        filteredCompanies.push(client);
                    //}
                });
            });
            return filteredCompanies;
        } else {
            return companies;
        }
    };
}]);*/