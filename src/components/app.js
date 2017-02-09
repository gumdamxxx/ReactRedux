import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchBar from '../containers/search_bar';
import WeahterList from '../containers/weather_list';


class AppWeather extends Component {
  render() {
    return (
      <div>
          <Link to="posts/new">to posts</Link>
        <SearchBar />
        <WeahterList />
      </div>
    );
  }
}
class AppPost extends Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}
export { AppWeather, AppPost}