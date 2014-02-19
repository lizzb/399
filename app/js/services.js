'use strict';

/* Services */

var idayServices = angular.module('idayServices', ['ngResource']);



//http://stackoverflow.com/questions/16286605/initialize-angularjs-service-with-asynchronous-data
/*
idayServices.factory('FullCompanyList', ['$resource',
	return $resource('../data/week7grid.json', {} {
		get: {method: 'GET', isArray: true}
	});
});*/
  
  /*function($resource){
    return $resource('../data/week7grid.json', {}, {
      //query: {method:'GET', params:{phoneId:'companies'}, isArray:true}
    });
  }]);*/

// http://stackoverflow.com/questions/15164013/json-to-initialize-data-in-service?lq=1

// $http.get('data/week7grid.json').success(function(data) {

/*
Improve the way our app fetches data:
define a custom service that represents a RESTful client. 
Using this client we can make XHR requests for data
in an easier way, without having to deal with
the lower-level $http API, HTTP methods and URLs.

We used the module API to register a custom service
using a factory function. 
We passed in the name of the service - 'Phone' - 
and the factory function. 
The factory function is similar to a controller's 
constructor in that both can declare dependencies 
via function arguments. The Phone service declared 
a dependency on the $resource service.

The $resource service makes it easy 
to create a RESTful client with just a few lines of code. 
This client can then be used in our application, 
instead of the lower-level $http service.

http://docs.angularjs.org/tutorial/step_11

add the 'phonecatServices' module 
dependency to 'phonecatApp' module's requires array.

Notice how in PhoneListCtrl we replaced:

$http.get('phones/phones.json').success(function(data) {
  $scope.phones = data;
});
with:

$scope.phones = Phone.query();

This is a simple statement that we want to query for all phones.

An important thing to notice in the code above is that 
we don't pass any callback functions when invoking methods 
of our Phone service. Although it looks as if the result 
were returned synchronously, that is not the case at all. 
What is returned synchronously is a "future" — an object, 
which will be filled with data when the XHR response returns. 
Because of the data-binding in Angular, we can use 
this future and bind it to our template. 
Then, when the data arrives, the view will automatically update.

Sometimes, relying on the future object and data-binding 
alone is not sufficient to do everything we require, 
so in these cases, we can add a callback to process 
the server response. 
The PhoneDetailCtrl controller illustrates this by setting 
the mainImageUrl in a callback.
*/