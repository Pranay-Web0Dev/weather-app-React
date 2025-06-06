import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const API_KEY = "8d57e9c0c1f86d420ec6a0f46e1d1b23";

    const getWeather = async () => {
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            const data = await res.json();

            if (data.cod !== 200) {
                alert("City not found!");
                return;
            }

            const result = {
                cityName: data.name,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
            };

            setWeather(result);
        } catch (err) {
            console.error("Error:", err);
        }
    };

    const handleChange = (e) => setCity(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeather();
        setCity("");
    };

    return (
        <div>
             <h2
      style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        background: 'linear-gradient(to right,rgb(215, 221, 229),rgb(224, 216, 216),rgb(255, 255, 255))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundSize: '300% 100%',
        animation: 'shine 0.4s linear infinite',
      }}
    >
      Weather App
    </h2>
            <SearchBox city={city} onChange={handleChange} onSubmit={handleSubmit} />
            {weather && <WeatherInfo weather={weather} />}
        </div>
    );
}
