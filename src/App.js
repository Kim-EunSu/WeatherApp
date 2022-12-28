import { useState } from "react";
import axios from "axios";
import index from "./index.css";

function App() {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3bbbcbe27f124138733419d7708043c8`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      // 검색을 하고난 후 다시 검색창을 비도록 설정
      setLocation("");
    }
  };

  return (
    <div className="App">
      <div className="Search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyPress={searchLocation}
          type="text"
        />
      </div>
      <div className="Container">
        <div className="Top">
          <div className="Location">
            <p>{data.name}</p>
          </div>
          <div className="Temp">
            {/* data.main이 사용가능한지 먼저 혹인하기 */}
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="Description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="Bottom">
          <div className="Feels">
            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="Humildity">
            {data.main ? <p>{data.main.humidity}°C</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed()}MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
