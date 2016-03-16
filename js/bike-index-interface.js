$(document).ready(function() {
  $('#bike-search').click(function() {

    $('#results').empty();

    var per_page = "&per_page=" + $('#per_page').val();
    var colors = "&colors=" + $('#colors').val();
    var proximity = "&proximity=" + $('#proximity').val();

    $.get("https://bikeindex.org/api/v2/bikes_search/stolen?page=1" + colors + per_page + proximity).then(function(response){
      response.bikes.forEach(function(bike){
        if(bike.thumb !== null){
          $('#results').append("<img src='" + bike.thumb + "'>");
        } else {
          $('#results').append("<img src='./../../img/not-bike.png'>");
        }
        $('#results').append("<h3>" + bike.title + "</h3><p>Stolen Location: " + bike.stolen_location + "</p> <p>Date Stolen: " + moment(bike.date_stolen, "X").format("dddd, MMMM, Do, YYYY") + "</p>");
      });
    }).fail(function(error) {
      $('#results').text(error.responseJSON.message);
    });
  });
});
