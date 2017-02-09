import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData = []) {
        if (cityData.showapi_res_code === 0 && cityData.showapi_res_body.list.length) {
            const list = cityData.showapi_res_body.list;
            const max_temperature = list.map( weather => weather.max_temperature);
            const min_temperature = list.map( weather => weather.min_temperature);
            const aqi = list.map( weather => weather.aqi);
            const area = cityData.showapi_res_body.area;
            const id = `${area}_${Math.floor(Math.random() * 1000)}`;
            return (
                <tr key={id}>
                    <td>{area}</td>
                    <td><GoogleMap lon={116.407395} lat={39.904211}/></td>
                    <td>
                        <Chart data={max_temperature} color="green" unit="℃"/>
                    </td>
                    <td>
                        <Chart data={min_temperature} color="blue" unit="℃"/>
                    </td>
                    <td>
                        <Chart data={aqi} color="blue" unit="点"/>
                    </td>
                </tr>
            );
        } else {
            return null;
        }
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>城市</th>
                    <th>最高温度</th>
                    <th>最低温度</th>
                    <th>大气污染</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);