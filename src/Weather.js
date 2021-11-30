import axios from 'axios';
import React, { Component } from 'react';
import "./App.css";

export default class WeatherList extends Component {

  weatherData = async () => {
    var icon = '';
    await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=051c11a296f44220c98d0c7d3abce3b8&units=metric')
      .then((res) => {
        document.getElementById(
          'Displayinfo'
        ).innerText = `City: ${res.data.name}
                       Current Temp:   ${res.data.main.temp} °C
                       Description: ${res.data.weather[0].main}
                       Feels-Like:  ${res.data.main.feels_like} °C`;
        icon = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
      });

    await axios.get(icon).then(() => {
      document.getElementById('icon').src = icon;
    });

  };

  render() {
    return (
      <>
      <div className="container">
      <h2 className="header">Mariama Ali-101291481</h2>
        <hr/>
        <button type="button" className="btn btn-outline-dark my-2" onClick={this.weatherData}> Get Today Weather Data </button>
        <p id="Displayinfo"></p>
        <img id="icon" src="" alt=""></img>
      </div>
      </>
    );
  }
}
