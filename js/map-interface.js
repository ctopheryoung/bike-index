var GoogleMapsLoader = require('google-maps');
var apiKey = require('./../.env').apiKey;
GoogleMapsLoader.KEY = apiKey;
var map, geocoder;

$(document).ready(function() {

  GoogleMapsLoader.load(function(google) {
    map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 37.09024, lng: -95.712891},
      zoom: 4
    });
  });

  GoogleMapsLoader.onLoad(function(google) {
  	console.log('I just loaded google maps api');
  });

});
