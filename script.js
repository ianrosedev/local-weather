$(function() {
  $.ajax({
  url : "http://api.wunderground.com/api/caf3ed5a4eec9e36/conditions/astronomy/geolookup/q/autoip.json",
  dataType : "jsonp",
  success : 
    function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_f = parsed_json['current_observation']['temp_f'];
      var temp_c = parsed_json['current_observation']['temp_c'];
      var icon = parsed_json['current_observation']['icon_url'];
      
      // Find time of day and change the background color
      var sunrise = parsed_json['sun_phase']['sunrise']['hour'];
      var sunset = parsed_json['sun_phase']['sunset']['hour'];
      // Finding local time to compare to sunrise/sunset
      var localtime = parsed_json['current_observation']['local_time_rfc822'];
      var myDate = new Date(localtime);
      var hours = myDate.getHours();
      if (hours < sunrise || hours > sunset) {
        $('body').css('background-color', '#010129');
      } else {
        $('body').css('background-color', '#d2e1fc');
      }
      
      // Display location and temp in F on page 
      $('#location').text('Hello ' + location);
      $('#temp-degree').text(temp_f);
      
      // Get temperature and change it with a button
      $('button').click(function() {
        if($(this).text() === 'Change to Celsius') {
          $('#temp-degree').text(temp_c);
          $(this).text('Change to Fahrenheit');
          $('#temp-unit').text('C');
        } else {
          $('#temp-degree').text(temp_f);
          $(this).text('Change to Celsius');
          $('#temp-unit').text('F');
        }
      });
      
      // Background image is icon depending on weather conditions
      $('#backgroundIMG').css('background-image', 'url(' + icon + ')');
    }
  });
});
