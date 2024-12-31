// Replace 'YOUR_API_KEY' with your actual OpenWeather API key
const apiKey = '92b47b19cda72cc3d6d696c8aac6263d';

async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value;

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        // Update the UI with weather information
        document.getElementById('cityName').textContent = data.name;
        document.getElementById('temperature').textContent = 
            Math.round(data.main.temp);
        document.getElementById('humidity').textContent = data.main.humidity;

    } catch (error) {
        alert(error.message);
    }
}

// Allow users to press Enter key to search
document.getElementById('cityInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});