$(document).ready(function() {
  $('#bike-search').click(function() {
    var per_page = "&per_page=" + $('#per_page').val();
    var colors = "&colors=" + $('#colors').val();
    var proximity = "&proximity=" + $('#proximity').val();
    $.get("https://bikeindex.org/api/v2/bikes_search/stolen?page=1" + colors + per_page + proximity).then(function(response){
      response.bikes.forEach(function(bike){
        $('#results').append("bike title:" + bike.title + "<br>");
      });
    }).fail(function(error) {
      $('#results').text(error.responseJSON.message);
    });
  });
});
