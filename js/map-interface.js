var GoogleMapsLoader = require('google-maps');

var apiKey = require('./../.env').apiKey;

GoogleMapsLoader.KEY = apiKey;

$(document).ready(function() {

  GoogleMapsLoader.load(function(google) {
    new google.maps.Map(document.getElementById("map"), {
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: false,
      zoom: 8
    });
  });

  GoogleMapsLoader.onLoad(function(google) {
  	console.log('I just loaded google maps api');
  });

});
