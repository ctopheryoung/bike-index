$(document).ready(function() {
  $('#bike-search').click(function() {
    var per_page = "&per_page=" + $('#per_page').val();
    var colors = "&colors=" + $('#colors').val();
    var proximity = "&proximity=" + $('#proximity').val();

    console.log("https://bikeindex.org/api/v2/bikes_search/stolen?page=1" + colors + per_page + proximity);

    $.get("https://bikeindex.org/api/v2/bikes_search/stolen?page=1" + colors + per_page + proximity).then(function(response){
      console.log(response);
    }).fail(function(error) {
      $('#results').text(error.responseJSON.message);
    });
  });
});
