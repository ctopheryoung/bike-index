var moveMap = require('./../js/geocode.js').moveMap;
var addMarker = require('./../js/markers.js').addMarker;
var map, geocoder, marker;
var GoogleMapsLoader = require('google-maps');
var apiKey = require('./../.env').apiKey;
GoogleMapsLoader.KEY = apiKey;

$(document).ready(function() {

  GoogleMapsLoader.load(function(google) {
    map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 37.09024, lng: -95.712891},
      zoom: 4
    });
  });

  $('#bike-search').click(function() {
    var per_page = "&per_page=" + $('#per_page').val();
    var colors = "&colors=" + $('#colors').val();
    var proximity = "&proximity=" + $('#proximity').val();

    var location = $('#proximity').val();
    moveMap(location, map);


    $('#results').empty();

    $.get("https://bikeindex.org/api/v2/bikes_search/stolen?page=1" + colors + per_page + proximity + "&proximity_square=20").then(function(response){
      response.bikes.forEach(function(bike){

        if(bike.thumb !== null){
          $('#results').append("<img src='" + bike.thumb + "'>");
        } else {
          $('#results').append("<img src='./../../img/not-bike.png'>");
        }

        $('#results').append("<h3>" + bike.title + "</h3><p>Stolen Location: " + bike.stolen_location + "</p> <p>Date Stolen: " + moment(bike.date_stolen, "X").format("dddd, MMMM, Do, YYYY") + "</p>");

        addMarker(bike.stolen_location, map);
      });
    }).fail(function(error) {
      $('#results').text(error.responseJSON.message);
    });
  });
});
