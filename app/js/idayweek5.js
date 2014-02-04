var options = {
  valueNames: [ 'name', 'booth', 'room', 'intern', 'coop', 'fte', 'msphd' ],
  item: '<li>' +
        '<h3 class="name"></h3>' +
        '<span class="booth"></span>' +
        ' Intern:<span class="intern"></span> &nbsp;&nbsp&nbsp;&nbsp;'+
        ' FTE:<span class="fte"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        ' Coop:<span class="coop"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        ' MS PhD:<span class="msphd"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        ' <br>' +
        'am:<span class="am"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        'bme:<span class="bme"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        'chem:<span class="chem"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        'civil:<span class="civil"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        'ce:<span class="ce"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        'cs:<span class="cs"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        'ee:<span class="ee"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        'enve:<span class="enve"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        'ie:<span class="ie"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        'made:<span class="made"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        'matsci:<span class="matsci"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        'mech:<span class="mech"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        'noneng:<span class="noneng"></span>  &nbsp;&nbsp&nbsp;&nbsp;'+
        '</li>'
};

/* 
"Room":"Louis",
    "Floor":2,
    "booth":24,
    "am":"",
    "bme":"",
    "chem":"",
    "civil":"",
    "ce":"1",
    "cs":"1",
    "ee":"",
    "enve":"",
    "ie":"",
    "made":"",
    "matsci":"",
    "mech":"",
    "noneng":"",
    "msphd":"1",
    "fte":"1",
    "coop":"",
    "intern":"1"
civil = ce --> computer engineering instead of cmpe
chem = che --> chem(E?)
mse = matsci
me / meche... permanent vs full time
 */

 /* 
to get company list into json format:
saved as .csv from excel
used this lovely tool: http://www.convertcsv.com/csv-to-json.htm
and put it in a separate js file. woohoo!
but then i needed to change a bunch of values... 
since majors are a boolean filter, "" is understood as 0/false, 
but "1" is not understood as 1/true.
so did simple find replace in the .csv file
need to figure out an excel trick to help me replace all "x" s with 1 and 0
*/

var companyList = new List('companies', options, values); 
// should be ... but options... defined in week4list.js


//var filters = [filterFunc1, filterFunc2, filterFunc3];
var activeFilters = [];


/*
listContainer Element The element node that contains the entire list area.

list Element      The element containing all items.

items Array       An Array of all Item-objects in the list.

visibleItems      Array  The currently visible items in the list

matchingItems     Array The items matching the currently active filter and search.

searched Boolean  Returns true if the list is searched.

filtered Boolean  Returns true if there is an active filter.

list Element      The element containing all items.

plugins Object    The currently avaliable plugins.
*/

function displayCurrentFilter(valueName)
{
    var length = companyList.items.length;
    var visible = companyList.visibleItems.length;
    var matching = companyList.matchingItems.length;
  
  var filterInfoText = 'filter applied? ' + companyList.filtered + '<br>';
  filterInfoText += activeFilters.toString();
  
  var currentItemInfoText = "Total: " + length + " | Visible: " + visible + " | Matching: " + matching;

  document.getElementById('currentsorting').innerHTML = "<br>" + currentItemInfoText;
  document.getElementById('currentfilter').innerHTML = filterInfoText;

}


function displayCurrentSort(valueName)
{
    // not working atm, no api plug 
  //document.getElementById('currentsorting').innerHTML = valueName; 
    //document.getElementById('currentsorting').innerHTML += "\n Currently sorted?";

}



 // reset the company list and re-apply the filters still active
function updateFilters()
{
    companyList.filter(); // refresh/clear all filters
    //var filteredList = companyList;
  
    var activeFilter2 = [];
    var count = 0;
    
    
    options.valueNames.forEach(function (valueName) {

        var filterOn = document.getElementById(valueName);

        // see if the corresponding checkbox for each filter value is checked
        // if so add to list of active filters
        if( filterOn != null && filterOn.checked == true )
        {
            //filterBy(valueName, true);
             activeFilters.push(valueName);
          
            
          var filter = function(item) { return item.values()[valueName] == true};
           // activeFilters.push(filter);
         // activeFilter2[count] = filter;
          activeFilter2.append(function(item) { return item.values()[valueName] == true});
          count++;
        }

        else if( filterOn != null && filterOn.checked == false)
        {
            // remove filter from list of active filters
            //removeFilter(valueName);
        }

    });


    // reset the company list and re-apply the filters still active
    //updateFilters();

    // https://github.com/javve/list.js/pull/139
    // Finally filter the LIST with the array of multiple filters
    // LIST.filter(filters);
    //activeFilters.push(function(item)
    //{ return item.values()[valueName] == true});
  
  //var currentFilterString = "";
  /*companyList.filter(function (item) {
  
    activeFilters.forEach(function (filterName) {
      { return item.values()[filterName.toString()] == true};
    }); });*/
    
    
    //var filter = function(item) { return item.values()[valueName] == true};
  
    //companyList.filter(activeFilters);
  companyList.filter(activeFilter2);

    //companyList.update();

    displayCurrentFilter();
}


/*
function checkFilters(valueName)
{
    var filterOn = document.getElementById(valueName);
    
    // value that was most recently changed
    // if a new checkbox was ticked, we dont have to iterate through...
    // actually yeah we do poopsies.
    if(filterOn != null && filterOn.checked == true)
    {
        activeFilters.push(valueName);
        companyList.filter(function(item)
            { return item.values()[valueName] == true});
    }


}*/

//https://github.com/javve/list.js/issues/189

function clearFilters()
{
  companyList.filter();
  document.getElementById('currentfilter').innerHTML = 'none';
  // SHOULD ALSO UNCHECK ALL CHECKBOXES
}

function removeFilter(valueName)
{
    // http://davidwalsh.name/remove-item-array-javascript
    // http://www.w3schools.com/jsref/jsref_splice.asp
    var i = activeFilters.indexOf(valueName);
    if(i != -1) {
        activeFilters.splice(i, 1);
    }
}



function filterBy(valueName, active)
{
    if (valueName == '') companyList.filter(); //clearfilters

    /// noooo this is still replacing filters not adding together... 
    // or adding together but both must be true, no undoing

    // check if the valueName is one of the names
    // in the options.valueNames list
    // if it is, should be correctly spelled/formatted
    // - feed right in
    // pretty hacky for now... i should use jquery... but its slow...

    // not using switch right now because might want multiple else if

    if (valueName == 'intern') {
        // item.values()[valueName]
        //companyList.filter(filterIntern);
        //filteredList
        companyList.filter(function(item){ return item.values().intern == true });
    }
    if (valueName == 'fte') {
        //filteredList
        companyList.filter(function(item){ return item.values().fte == true });
    }
    if (valueName == 'coop') {
        //companyList.filter(filterCoop);
        companyList.filter(function(item){ return item.values().coop == true });
    }
    if (valueName == 'msphd') {
        //filteredList
        companyList.filter(function(item){ return item.values().msphd == true });
    }

    if (valueName == 'am') {
        //filteredList
        companyList.filter(function(item){ return item.values().am == true });
    }

    if (valueName == 'bme') {
        //filteredList
        companyList.filter(function(item){ return item.values().bme == true });
    }

    if (valueName == 'chem') {
        //companyList
        companyList.filter(function(item){ return item.values().chem == true });
    }

    if (valueName == 'civil') {
        companyList.filter(function(item){ return item.values().civil == true });
    }

    if (valueName == 'ce') {
        companyList.filter(function(item){ return item.values().ce == true });
    }

    if (valueName == 'cs') {
        companyList.filter(function(item){ return item.values().cs == true });
    }

    if (valueName == 'ee') {
        companyList.filter(function(item){ return item.values().ee == true });
    }

    if (valueName == 'enve') {
        companyList.filter(function(item){ return item.values().enve == true });
    }

    if (valueName == 'ie') {
        companyList.filter(function(item){ return item.values().ie == true });
    }

    if (valueName == 'made') {
        companyList.filter(function(item){ return item.values().made == true });
    }

    if (valueName == 'matsci') {
        companyList.filter(function(item){ return item.values().matsci == true });
    }

    if (valueName == 'mech') {
        companyList.filter(function(item){ return item.values().mech == true });
    }

    if (valueName == 'noneng') {
        companyList.filter(function(item){ return item.values().noneng == true });
    }

    displayCurrentFilter(valueName);
}


/*
window.onload = function() { 
// create filters for each value in option list
 options.valueNames.forEach(function (valueName) {
        
        var filterHTML = "";
        //<button class="filter major" onclick="filterBy('am')"> AM </button>
        filterHTML += "<button class=\"filter major\" onclick=\"filterBy('";
        filterHTML += "')> " + valueName + " ";
        filterHTML += "</button>";
        document.getElementById('majors').innerHTML += filterHTML;
    });


};

/*
    window.onload = function() { 
// create filters for each value in option list
 options.valueNames.forEach(function (valueName) {
        
        var filterHTML = "";
        //<button class="filter major" onclick="filterBy('am')"> AM </button>
        filterHTML += "<button class=\"filter major\" onclick=\"filterBy('";
        filterHTML += "')> " + valueName + " ";
        filterHTML += "</button>";
        document.getElementById('majors').innerHTML += filterHTML;
    });


};
  <!--
    <button class="filter major" onclick="filterBy('am')"> AM </button>
    <button class="filter major" onclick="filterBy('bme')"> BME </button>
    <button class="filter major" onclick="filterBy('chem')"> Chem </button>
    <button class="filter major" onclick="filterBy('civil')"> Civil </button>
    <button class="filter major" onclick="filterBy('ce')"> CE </button>
    <button class="filter major" onclick="filterBy('cs')"> CS </button>
    <button class="filter major" onclick="filterBy('ee')"> EE </button>
    <button class="filter major" onclick="filterBy('enve')"> EnvE </button>
    <button class="filter major" onclick="filterBy('ie')"> IE </button>
    <button class="filter major" onclick="filterBy('made')"> MaDE </button>
    <button class="filter major" onclick="filterBy('matsci')"> Matsci </button>
    <button class="filter major" onclick="filterBy('mech')"> Mech </button>
    <button class="filter major" onclick="filterBy('noneng')"> Non-eng </button>

    <button class="filter" onclick="clearFilters()">Clear filters </button>
    -->*/

