// NICE IMAGE LOADING
/* 
 * Not part of MixItUp, but this is a great lightweight way
 * to gracefully fade-in images with CSS3 after they have loaded
 */
/*
      function imgLoaded(img){  
          $(img).parent().addClass('loaded');
      };*/

//var companies = [
// all_companies is an array defined in a separate file
// should use JSON importing and not have to name the array

// ON DOCUMENT READY:

$(function () {
  all_companies.forEach(function (company) {
    var companyHTML = '<li class="mix ';
    // need to add positions AND majors to class of the LI element for filtering

    //companyHTML += company.position + ' '; // + park.major + ' "';
    company.position.forEach(function (j) {
      companyHTML += j + ' ';
    });
    company.major.forEach(function (m) {
      companyHTML += m + ' ';
    });

    // mix_all gets added???
    companyHTML += '"';
    companyHTML += 'data-name="' + company.name + '" data-booth= "' + company.booth + '" >';
    //<li class="mix intermountain camping climbing fishing"
    // data-name="Intermountain" data-booth="146597.40">
    companyHTML += '<div class="meta name">';
    companyHTML += '<div class="img_wrapper">';
    // <img src="im/acadia.jpg" onload="imgLoaded(this)" />
    //    <img src="im/zion.jpg" onload="imgLoaded(this)" />
    companyHTML += '</div>';
    companyHTML += '<div class="titles">';
    companyHTML += '<h2>' + company.name + '</h2>';
    companyHTML += '<p><em>' + company.room + '</em></p>';
    companyHTML += '</div>'; //titles
    companyHTML += '</div>'; //name

    companyHTML += '<div class="meta position">';
    //companyHTML += '<p>' + company.position + '</p>';
    company.position.forEach(function (job) {
      companyHTML += job + ' ';
    });
    companyHTML += '</div>';

    companyHTML += '<div class="meta major">';
    companyHTML += '<ul>';
    company.major.forEach(function (m) {
      //companyHTML += '<li>' + m + '</li>'; // maybe add all possible majors to a list here!
      companyHTML += m + ', ';
    });
    companyHTML += '</ul>';
    companyHTML += '</div>';

    companyHTML += '<div class="meta booth">';
    companyHTML += '<p>' + company.booth + '</p>';
    // pretty print/tostring <p>47,452.80</p>
    companyHTML += '</div>';
    companyHTML += '</li>';

    $('#companies').append(companyHTML);
  });


  // must be a more efficient way
  // to figure out what the filter names and values are
  // vs friendly names and values
  // but for now maybe i'll just use variables? json objects? iono

  //name dataname filtername iono
  /*
  var all_positions = [
    {
      name: "alaska",
      friendlyName: "Alaska",
  },
    {
      name: "intermountain",
      friendlyName: "Intermountain",
  },
    {
      name: "northeast",
      friendlyName: "Northeast",
  },
    {
      name: "pacific_west",
      friendlyName: "Pacific West",
  },
    {
      name: "southeast",
      friendlyName: "Southeast",
  },
  ];

  var all_majors = [
    {
      name: "camping",
      friendlyName: "Camping",
  },
    {
      name: "climbing",
      friendlyName: "Climbing",
  },
    {
      name: "fishing",
      friendlyName: "Fishing",
  },
    {
      name: "swimming",
      friendlyName: "Swimming",
  },
  ];
*/

  /*
  <li class="active" data-filter="all" data-dimension="position">All</li>
  <!--
  <li data-filter="alaska" data-dimension="position">Alaska</li>
  <li data-filter="intermountain" data-dimension="position">Intermountain</li>
  <li data-filter="northeast" data-dimension="position">Northeast</li>
  <li data-filter="pacific_west" data-dimension="position">Pacific West</li>
  <li data-filter="southeast" data-dimension="position">Southeast</li>
  -->
  <li data-filter="Alaska" data-dimension="position">Alaska</li>
  <li data-filter="Intermountain" data-dimension="position">Intermountain</li>
  <li data-filter="Northeast" data-dimension="position">Northeast</li>
  <li data-filter="Pacific West" data-dimension="position">Pacific West</li>
  <li data-filter="Southeast" data-dimension="position">Southeast</li>
*/




  // create the HTML for the 2 drop down filters

/*
  // make filters to fill list
  $(function () {

    var majorFiltersHTML = '';
    var positionFiltersHTML = '';

    all_majors.forEach(function (major) {
      var majorHTML = '<li data-filter="' + major.friendlyName + '" ';
      majorHTML += 'data-dimension="major">' + major.friendlyName + '</li>';
      majorFiltersHTML += majorHTML; //.append(majorHTML);
    });


    all_positions.forEach(function (jobType) {
      var positionHTML = '<li data-filter="' + jobType.friendlyName + '" ';
      positionHTML += 'data-dimension="position">' + jobType.friendlyName + '</li>';
      positionFiltersHTML += positionHTML; // .append(positionHTML);
    });

    // make dropdown and include all as an option for majors
    var majorFilters = ''; // '<div class="drop_down wf">';
    majorFilters += '<span class="anim150">Major</span>';
    majorFilters += '<ul class="anim250">';
    //majorFilters += '<li data-filter="all" data-dimension="'; // class="active"
    //majorFilters += 'major';
    //positionFilters += 'position';
    //majorFilters += '">All</li>';
    majorFilters += majorFiltersHTML;
    majorFilters += '</ul>';
    // majorFilters += '</div>';

    //= majorFilters;   


    // make dropdown and include all as an option for positions/job types
    var positionFilters = ''; //'<div class="drop_down wf">';
    positionFilters += '<span class="anim150">Position</span>';
    positionFilters += '<ul class="anim250">';
    positionFilters += '<li data-filter="all"'; // class=""active
    positionFilters += 'data-dimension="position">All</li>';
    positionFilters += positionFiltersHTML;
    positionFilters += '</ul>';
    //positionFilters += '</div>';



    $('#majors').append(majorFilters);
    $('#majors').addClass("drop_down wf");


    $('#positions').append(positionFilters);
    $('#positions').addClass("drop_down wf");

  });*/
  /*
  var sharedFilterListHTML = '<div class="drop_down wf">';
  sharedFilterListHTML += '<span class="anim150">';
  // different titles
  sharedFilterListHTML += '</span>';
  sharedFilterListHTML += '<ul class="anim250">';
  sharedFilterListHTML += '<li class="active" data-filter="all" data-dimension="';
  // different data dimension
  sharedFilterListHTML += '">All</li>';
  // different filler html list items
  sharedFilterListHTML += '</ul>';
  sharedFilterListHTML += '</div>';
  */


  // --------------------------------------- //

  // INSTANTIATE MIXITUP
  $('#companies').mixitup({
    layoutMode: 'list', // Start in list mode (display: block) by default
    listClass: 'list', // Container class for when in list mode
    gridClass: 'grid', // Container class for when in grid mode
    effects: ['fade', 'blur'], // List of effects 
    listEffects: ['fade', 'rotateX'] // List of effects ONLY for list mode
  });

  // --------------------------------------- //

  // HANDLE LAYOUT CHANGES

  // Bind layout buttons to toList and toGrid methods:

  $('#ToList').on('click', function () {
    $('.button').removeClass('active');
    $(this).addClass('active');
    $('#companies').mixitup('toList');
  });

  $('#ToGrid').on('click', function () {
    $('.button').removeClass('active');
    $(this).addClass('active');
    $('#companies').mixitup('toGrid');
  });

  // --------------------------------------- //

  // HANDLE MULTI-DIMENSIONAL CHECKBOX FILTERING

  /*	
   *	The desired behaviour of multi-dimensional filtering can differ greatly
   *	from project to project. MixItUp's built in filter button handlers are best
   *	suited to simple filter operations, so we will need to build our own handlers
   *	for this demo to achieve the precise behaviour we need.
   */
  console.log('got here');
  var $filters = $('#Filters').find('li'),
    dimensions = {
      position: 'all', // Create string for first dimension
      major: 'all' // Create string for second dimension
    };

  // Bind checkbox click handlers:

  $filters.on('click', function () {
    console.log('got here');
    var $t = $(this),
      dimension = $t.attr('data-dimension'),
      filter = $t.attr('data-filter'),
      filterString = dimensions[dimension];

    if (filter == 'all') {
      // If "all"
      if (!$t.hasClass('active')) {
        // if unchecked, check "all" and uncheck all other active filters
        $t.addClass('active').siblings().removeClass('active');
        // Replace entire string with "all"
        filterString = 'all';
      } else {
        // Uncheck
        $t.removeClass('active');
        // Emtpy string
        filterString = '';
      }
    } else {
      // Else, uncheck "all"
      $t.siblings('[data-filter="all"]').removeClass('active');
      // Remove "all" from string
      filterString = filterString.replace('all', '');
      if (!$t.hasClass('active')) {
        // Check checkbox
        $t.addClass('active');
        // Append filter to string
        filterString = filterString === '' ? filter : filterString + ' ' + filter;
      } else {
        // Uncheck
        $t.removeClass('active');
        // Remove filter and preceeding space from string with RegEx
        var re = new RegExp('(\\s|^)' + filter);
        filterString = filterString.replace(re, '');
      }
    }


    // Set dimension with filterString
    dimensions[dimension] = filterString;

    // We now have two strings containing the filter arguments for each dimension:	
    console.info('dimension 1: ' + dimensions.position);
    console.info('dimension 2: ' + dimensions.major);

    /*
     *	We then send these strings to MixItUp using the filter method. We can send as
     *	many dimensions to MixitUp as we need using an array as the second argument
     *	of the "filter" method. Each dimension must be a space seperated string.
     *
     *	In this case, MixItUp will show elements using OR logic within each dimension and
     *	AND logic between dimensions. At least one dimension must pass for the element to show.
     */

    $('#companies').mixitup('filter', [dimensions.position, dimensions.major]);
  });

});