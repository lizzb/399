	        // create the module and name it scotchApp
	       var scotchApp = angular.module('scotchApp', ['ngRoute']);

	       /*
          
          http://lifehacker.com/start-a-simple-web-server-from-any-directory-on-your-ma-496425450
          
          Just navigate to the directory you want to use and enter the following command:P

python -m SimpleHTTPServer 8000P


simple web server any directory mac!!!


Configure Routes and Views

Since we are making a single page application and we don’t want any page refreshes, we’ll use Angular’s routing capabilities.

Let’s look in our Angular file and add to our application. We will be using $routeProvider in Angular to handle our routing. This way, Angular will handle all of the magic required to go get a new file and inject it into our layout.

AngularJS 1.2 and Routing The ngRoute module is no longer included in Angular after version 1.1.6. You will need to call the module and add it to the head of your document to use it. This tutorial has been updated for AngularJS 1.2

// create the module and name it scotchApp
        // also include ngRoute for all our routing needs
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

http://stackoverflow.com/questions/19165584/how-to-get-rid-of-in-url-when-using-angularjs


myApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
      when('/', {
        templateUrl: '/partials/home',
        controller: 'homePage'
      }).      
      otherwise({redirectTo: '/login'});
  $locationProvider.html5Mode(true);        // <-- Here comes the magic
}]);*/

	        // configure our routes
	       scotchApp.config(function ($routeProvider, $locationProvider) {
	         $routeProvider
	         // route for the home page
	         .when('/', {
	           templateUrl: '/pages/home.html',
	           controller: 'mainController'
	         })

	         // route for the companies page
	         .when('/companies', {
	           templateUrl: '/pages/companies.html',
	           controller: 'companiesController'
	         })

	         // route for the about page
	         .when('/about', {
	           templateUrl: '/pages/about.html',
	           controller: 'aboutController'
	         })

	         // route for the contact page
	         .when('/contact', {
	           templateUrl: '/pages/contact.html',
	           controller: 'contactController'
	         });


	         // use the HTML5 History API
	         //  do this when defining your Angular application and configuring your routes.
	         // a standardized way to manipulate the browser history using a script.
	         // This lets Angular change the routing and URLs of pages without refreshing
	         $locationProvider.html5Mode(true);

	       });





	        // create the controller and inject Angular's $scope
	       scotchApp.controller('mainController', function ($scope) {
	         // create a message to display in our view
	         $scope.message = 'Everyone come and see how good I look!';
	       });

	       scotchApp.controller('companiesController', function ($scope) {
	         // create a message to display in our view
	         //$scope.message = 'this should be  a list...';
	       });

	       scotchApp.controller('aboutController', function ($scope) {
	         $scope.message = 'Look! I am an about page.';
	       });

	       scotchApp.controller('contactController', function ($scope) {
	         $scope.message = 'Contact us! JK. This is just a demo.';
	       });

	       /* 
Now we have defined our routes with $routeProvider. As you can see by the configuration, you can specify the route, the template file to use, and even a controller. This way, each part of our application will use its own view and Angular controller.

Our home page will pull the home.html file. About and contact will pull their respective files. Now if we view our app, and click through the navigation, our content will change just how we wanted.

To finish off this tutorial, we just need to define the pages that will be injected. We will also have them each display a message from its respectiive controller.

this is done in the html files

Clean URLs: 
By default, Angular will throw a hash (#) into the URL. 
To get rid of this, we will need to use $locationProvider to enable the HTML History API. This will remove the hash and make pretty URLs. 
For more information: Pretty URLs in AngularJS: Removing the #.
For example:

http://example.com/
http://example.com/#/about
http://example.com/#/contact
It is very easy to get clean URLs and remove the hashtag from the URL.

There are 2 things that need to be done.

Configuring $locationProvider
Setting our base for relative links

$location Service

In Angular, the $location service parses the URL in the address bar and makes changes to your application and vice versa.

use the $locationProvider module and set html5Mode to true.

We will do this when defining your Angular application and configuring your routes.

SEO on Single Page Apps... Making your app seo friendly
*/