exports.convertTempToC = function(temp) {
  var Celsius = temp - 273.15;
  return Celsius;
}

exports.convertTempToF = function(temp) {
  var Celsius = temp - 273.15;
  var Fahrenheit = Celsius *1.8 +32;
  return Fahrenheit;
}
