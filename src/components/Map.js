import React, { Component } from "react";
import { render } from "react-dom";

const KEY = "AIzaSyCfHcc6s440kGXvhKF-L5NitYgCKcXCddg";

class Map extends Component {
  onScriptLoad = () => {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      {
        center: { lat: -34.90203959362061, lng: -57.974069657098354 },
        zoom: 8,
        disableDefaultUI: true,
      }
    );
    this.props.onMapLoad(map);
  };

  componentDidMount() {
    this.onScriptLoad();
  }

  render() {
    return <div id={this.props.id} className="h-screen" />;
  }
}

export default Map;
