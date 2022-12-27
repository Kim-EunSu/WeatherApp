import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Top = styled.div``;
const Location = styled.div``;
const Temp = styled.div``;
const Description = styled.div``;
const Feels = styled.p``;
const Bottom = styled.p``;
const Humidity = styled.p``;
const Wind = styled.p``;

function App() {
  //const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=3bbbcbe27f124138733419d7708043c8";

  return (
    <Container>
      <Top>
        <Location>
          <p>Dollars</p>
        </Location>
        <Temp>
          <h1>60℉</h1>
        </Temp>
        <Description>
          <Feels>Clouds</Feels>
          <Bottom>60℉</Bottom>
          <Humidity>20%</Humidity>
          <Wind>12 MPH</Wind>
        </Description>
      </Top>
    </Container>
  );
}

export default App;
