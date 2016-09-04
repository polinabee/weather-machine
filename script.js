req = $.getJSON('//ip-api.com/json?callback=?', function(data) {
  var lat = data.lat;
  var lon = data.lon;
  var city = data.city;
  var region = data.regionName;
  $('#location').html(city + ', ' + region);
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=afcd0ac9b38a88032f986dd0eab2043d', function(weatherdata) {
    var description = weatherdata.weather[0].main;
    var temp = weatherdata.main.temp;
    var ftemp = (temp * 9 / 5 - 459.67).toFixed(1);
    var ctemp = ((ftemp - 32) / 1.8).toFixed(1);
    console.log(weatherdata.weather[0].icon);
    var icon = 'http://openweathermap.org/img/w/' + weatherdata.weather[0].icon + '.png';
    $("#weather").html(ftemp + 'ºF<br>');
    $("#c-button").on("click", function() {
      $("#weather").html(ctemp + 'ºC<br>');
    });
    $("#f-button").on("click", function() {
      $("#weather").html(ftemp + 'ºF<br>');
    });
    $('#description').append("<img src=" + icon + "><br>" + description);
  });
});