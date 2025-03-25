const apiKey = 'your_api_key_here'; // Replace this with your actual API key

// Function to fetch weather details
async function getWeather() {
    const city = document.getElementById('cityInput').value;

    if (city === '') {
        alert("Please enter a city name!");
        return;
    }

    const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=city   appid={apiKey}&units=metric;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById('weatherDetails').innerHTML = <p>City not found!</p>;
        } else {
            displayWeather(data);
        }
    } catch (error) {
        console.log(error);
        document.getElementById('weatherDetails').innerHTML = <p>Failed to fetch weather data. Please try again later.</p>;
    }
}
// Function to display weather data
function displayWeather(data) {
    const weatherDetails = document.getElementById('weatherDetails');
    weatherDetails.innerHTML = `
        <div class="weather-info">
            <p><span>City:</span> data.name</p>
            <p><span>Temperature:</span>{data.main.temp}°C</p>
            <p><span>Weather:</span> data.weather[0].description</p>
            <p><span>Humidity:</span>{data.main.humidity}%</p>
            <p><span>Wind Speed:</span> ${data.wind.speed} m/s</p>
        </div>
    `;
}
