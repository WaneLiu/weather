import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
class WeatherList extends Component {
  renderWeather(cityData) {
    const name = typeof cityData === 'undefined' ? null : cityData.city.name;
    const temps = typeof cityData === 'undefined' ? null : cityData.list.map(weather => weather.main.temp);

    if (!name) return ;
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange"></Chart>
        </td>
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
