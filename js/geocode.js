var map, geocoder, marker, locationResult;
var locationResult;

exports.moveMap = function(locale, mappy) {
  if(!geocoder) {
      geocoder = new google.maps.Geocoder();
  }

  var geocoderRequest = {
    address: locale
  };

  geocoder.geocode(geocoderRequest, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      locationResult = results[0].geometry.location;
    }
    mappy.setOptions({
      center: locationResult,
      zoom: 11
    });
  });
};
