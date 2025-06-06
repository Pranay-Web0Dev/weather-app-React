import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import rainy from "./assets/rainy-day.png"
import sun from "./assets/sun.png"
import snow from "./assets/snowflake.png"
import "./Weatherinfo.css"


export default function WeatherInfo({ weather }) {
  const weatherIcon = weather.humidity > 80 ? rainy : weather.temp < 15 ? snow : sun;

  return (
    <div style={{ marginTop: "20px" }}>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            weather.humidity > 80
              ? "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : weather.temp < 15
                ? "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                : "https://images.unsplash.com/photo-1586902197503-e71026292412?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="green iguana"
        />
        <CardContent>
          <div className="flex">

          <Typography gutterBottom variant="h5" component="div">
            {weather.cityName}
          </Typography>
          <img src={weatherIcon} alt="weather icon" width={30} height={30} style={{ marginBottom: "10px" }} />
          </div>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>

            <p><strong>Temperature:</strong> {weather.temp}°C</p>
            <p><strong>Feels Like:</strong> {weather.feelsLike}°C</p>
            <p><strong>Min:</strong> {weather.tempMin}°C | <strong>Max:</strong> {weather.tempMax}°C</p>
            <p><strong>Humidity:</strong> {weather.humidity}%</p>
            <p><strong>Description:</strong> {weather.weather}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
