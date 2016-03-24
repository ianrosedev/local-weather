

$(function() {
  $.ajax({
  url : "http://api.wunderground.com/api/caf3ed5a4eec9e36/conditions/geolookup/q/autoip.json",
  dataType : "jsonp",
  success : 
    function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_f = parsed_json['current_observation']['temp_f'];
      var temp_c = parsed_json['current_observation']['temp_c'];
      var icon = parsed_json['current_observation']['icon_url'];

      $('#location').text(location); 
      $('#tempF').text(temp_f);
      $('#tempC').text(temp_c);
      $('#weatherIMG').attr('src', icon);

      console.log(parsed_json);
    }
  });
});
