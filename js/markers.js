var map, geocoder, marker, locationResult;
var locationResult;


exports.addMarker = function(loccy, mappy) {
  if(!geocoder) {
      geocoder = new google.maps.Geocoder();
  }

  var geocoderRequest = {
    address: loccy
  };

  geocoder.geocode(geocoderRequest, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      locationResult = results[0].geometry.location;
    }
    marker = new google.maps.Marker({
      position: locationResult
    });
    marker.setMap(mappy);
  });
};
