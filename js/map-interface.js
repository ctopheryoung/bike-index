var GoogleMapsLoader = require('google-maps');
var apiKey = require('./../.env').apiKey;
GoogleMapsLoader.KEY = apiKey;

$(document).ready(function() {

  GoogleMapsLoader.load(function(google) {
    new google.maps.Map(document.getElementById("map"), {
      center: {lat: 45.51, lng: -122.6931698},
      zoom: 11
    });
  });

  GoogleMapsLoader.onLoad(function(google) {
  	console.log('I just loaded google maps api');
  });

});
