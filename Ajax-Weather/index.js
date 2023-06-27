function getWeather(city) {
  const xhr = new XMLHttpRequest();
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=5d066958a60d315387d9492393935c19';
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse (xhr.responseText);
      const temperature = response.main.temp;
      const pressuru = response.main.pressure;
      const description = response.weather[0].description;
      const humidity = response.main.humidity;
      const windSpeed = response.wind.speed;
      const windDegree = response.wind.deg;
      const iconCode = response.weather[0].icon;
  
      console.log('Temperature: ' + temperature);
      console.log('Pressuru: ' + pressuru);
      console.log('Description: ' + description);
      console.log('Humidity: ' + humidity);
      console.log('Wind Speed: ' + windSpeed);
      console.log('Wind Degree: ' + windDegree);
      console.log('Icon Code: ' + iconCode);
    }
  };
  
  xhr.open('GET', url, true);
  xhr.send(); 
}

const userCity = prompt('Введіть назву міста');
getWeather(userCity);


