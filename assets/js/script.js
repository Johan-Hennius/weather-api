

// Get the API Key from OpenWeathherMap
const apiKey = "f3250885431f58878f508fbb70480058";

// DOM objects
const cityInput = document.getElementById('city');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');

// Event Listener to search return
searchBtn.addEventListener('click', async function() {

    const city = cityInput.value;
    const coordinates = await fetchCoordinates(city);
    fetchWeather(coordinates.lat, coordinates.lon);

});

async function fetchCoordinates() {
    
    const response = await fetch (`https//api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
    

}