const apiKey = "5d23fbb7b45984175224d78609688115"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].main}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    } else {
      document.getElementById("weatherResult").innerHTML = `<p>City not found.</p>`;
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weatherResult").innerHTML = `<p>Failed to fetch weather data.</p>`;
  }
}
