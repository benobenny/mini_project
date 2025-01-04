
window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 21,cityid: '2643743',appid: 'b706b4a1476040204c9d575fc93840b5',units: 'metric',containerid: 'weatherWidget',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();


fetch(`https://api.openweathermap.org/data/2.5/weather?lat=51.5128&lon=-0.0918&appid=b706b4a1476040204c9d575fc93840b5&units=metric`)
  .then(response => response.json())
  .then(data => {
    const weatherInfo = `
      Temperature: ${data.main.temp}°C
      <br>Feels Like: ${data.main.feels_like}°C
      <br>Pressure: ${data.main.pressure} hPa
      <br>Humidity: ${data.main.humidity}%
      <br>Wind Speed: ${data.wind.speed} m/s
      <br>Cloudiness: ${data.clouds.all}%
    `;

    document.getElementById("weatherInfo").innerHTML += weatherInfo;
  })
  .catch(error => {
    document.getElementById("weatherInfo").innerHTML = `<p style="color: red;">Error fetching weather data: ${error.message}</p>`;
  });
