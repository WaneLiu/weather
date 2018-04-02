import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const bool_citydata = typeof cityData === 'undefined';
    const name =  bool_citydata ? null : cityData.city.name;
    const temps = bool_citydata ? null : cityData.list.map(weather => weather.main.temp);
    const pressures = bool_citydata ? null : cityData.list.map(weather => weather.main.pressure);
    const humidities = bool_citydata ? null : cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = bool_citydata ? null : cityData.city.coord;

    if (!name) return ;
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K"></Chart></td>
        <td><Chart data={pressures} color="green" units="hPa"></Chart></td>
        <td><Chart data={humidities} color="red" units="%"></Chart></td>
      </tr>
    );
  }
  render() {
    return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {!this.props.weather ? null : this.props.weather.map(this.renderWeather)}
      </tbody>
    </table>
    );
  }
}

function mapStateToProps( { weather } ) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
