var apiKey = require('./../.env').apiKey;
var convertTempToC = require('./../js/temp.js').convertTempToC;
var convertTempToF = require('./../js/temp.js').convertTempToF;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var zip = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + zip + ',us&appid=' + apiKey).then(function(response) {
      $('.showWeather').append("<h3>The temperature in " + response.name + " is:</h3><ul><li>" + response.main.temp + "&deg; Kelvin</li><li>" + convertTempToC(response.main.temp) + "&deg; Celsius</li><li>" + convertTempToF(response.main.temp) + "&deg; Fahrenheit");
      console.log(response);
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
