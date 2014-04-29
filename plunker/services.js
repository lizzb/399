angular.module('idayIonic.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('AllCompanies', function() {
  // Might use a resource here that returns a JSON array
  
  var companies = [
    { 
    idx: 0, booth: 1, room: 'Louis', floor: 2,
    nameId: 'fenwal', name: 'Fenwal Inc, a Fresenius-Kabi Company', 
    am: 0, bme: 1, chem: 0, civil: 0, ce: 1, cs: 1, ee: 0, enve: 0, ie: 0, made: 0, matsci: 0, mech: 1, noneng: 0,
    msphd: 0, fte: 1, coop: 1, intern: 1,
    description: "Fenwal is a pioneer and global leader in the development of products that improve the safety and availability of blood. Our products help shape the practice of transfusion medicine, making life-saving blood therapies available to the medical professionals and patients worldwide who rely on them."
},
{ 
    idx: 1, booth: 2, room: 'Louis', floor: 2,
    nameId: 'carsdotcom', name: 'Cars.com', 
    am: 0, bme: 0, chem: 0, civil: 0, ce: 1, cs: 1, ee: 0, enve: 0, ie: 0, made: 0, matsci: 0, mech: 0, noneng: 0,
    msphd: 0, fte: 0, coop: 0, intern: 1,
    description: "Visited by more than 11 million car shoppers each month, Cars.com is the leading destination for online car shoppers, offering credible and easy-to-understand information from consumers and experts to help buyers formulate opinions on what to buy, where to buy and how much to pay for a car.\n\nWith comprehensive pricing information, dealer reviews, side-by-side comparison tools, photo galleries, videos, unbiased editorial content and a large selection of new- and used-car inventory, Cars.com puts car buyers in control of their shopping process with the information they need to make confident buying decisions."
},
{ 
    idx: 2, nameId: "epic", name: 'Epic', booth: 3, room: 'Louis', floor: 2,
    am: 1, bme: 1, chem: 1, civil: 1, ce: 1, cs: 1, ee: 1, enve: 1, ie: 1, made: 1, matsci: 1, mech: 1, noneng: 1,
    msphd: 0, fte: 1, coop: 0, intern: 0,
    description: "Epic makes software for mid-size and large medical groups, hospitals and integrated healthcare organizations _ working with customers that include community hospitals, academic facilities, children's organizations, safety net providers and multi-hospital systems. Our integrated software spans clinical, access and revenue functions and extends into the home."
},
{ 
    idx: 3, booth: 4, room: 'Louis', floor: 2,
    nameId: 'fti', name: 'FTI Consulting', 
    am: 0, bme: 0, chem: 0, civil: 0, ce: 0, cs: 0, ee: 0, enve: 0, ie: 0, made: 0, matsci: 0, mech: 0, noneng: 0,
    msphd: 0, fte: 1, coop: 0, intern: 1,
    description: "Global organizations increasingly face complex challenges created by unpredictable financial markets, ever-changing governmental regulation and increasing global interdependencies. The enterprise value of each organization depends on how well these threats or opportunities are handled. But few have the capability or objective to manage them internally."
},
{ 
    idx: 4, booth: 5, nameId: 'bemis', name: 'Bemis', room: 'Louis', floor: 2,
    am: 0, bme: 0, chem: 0, civil: 0, ce: 0, cs: 0, ee: 0, enve: 0, ie: 0, made: 0, matsci: 0, mech: 0, noneng: 0,
    msphd: 0, fte: 0, coop: 0, intern: 0,
    description: "Established in 1858 in St. Louis, Missouri, as a manufacturer of machine sewn cotton bags for milled food and grain products, Bemis has played an influential role in the packaging industry ever since its founding. Now a global supplier of flexible packaging and pressure sensitive label materials headquartered in Neenah, Wisconsin, Bemis serves customers worldwide and produces packaging for products found in virtually every aisle of the grocery store. "
}
  ];
  
  // booth might change, id shouldn't

/*
{ 
    id: 5, booth: 6, room: 'Louis', floor: 2,
    nameId: '', name: '', 
    am: 0, bme: 0, chem: 0, civil: 0, ce: 0, cs: 0, ee: 0,
    enve: 0, ie: 0, made: 0, matsci: 0, mech: 0, noneng: 0,
    msphd: 0, fte: 0, coop: 0, intern: 0,
    description: ""
}
{ 
    id: 2, booth: 3, room: 'Louis', floor: 2,
    nameId: '', name: '', 
    am: 0, bme: 0, chem: 0, civil: 0, ce: 0, cs: 0, ee: 0, enve: 0, ie: 0, made: 0, matsci: 0, mech: 0, noneng: 0,
    msphd: 0, fte: 0, coop: 0, intern: 0,
    description: ""
}*/


  return {
    all: function() {
      return companies;
    },
    get: function(companyIdx) {
      // Simple index lookup
      return companies[companyIdx];
    }
  }
});




/* Services */

//http://stackoverflow.com/questions/19648345/angularjs-factory-only-called-once

//var idayServices = angular.module('idayServices', ['ngResource']);


/*
//  $http.get('data/week7grid.json').success(function(data) {
idayServices.factory('AllCompanies', ['$resource',
  function($resource){
    return $resource('data/week7grid.json', {}, {
      query: {method:'GET', params:{companyId:'companies'}, isArray:true}
    });
  }]);

/*
idayControllers.controller('CompanyListController', ['$scope', '$http', '$rootScope', //'$filter',
  function($scope, $http, $rootScope){ //$filter) {

  $http.get('data/week7grid.json').success(function(data) {
  $scope.companies = data;
  $rootScope.companies = data;


/*

'use strict';

/* Services 

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Company', ['$resource',
  function($resource){
    return $resource('companies/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'companies'}, isArray:true}
    });
  }]);


*/