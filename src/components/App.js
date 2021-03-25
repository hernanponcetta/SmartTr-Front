import React from "react";
import Map from "./Map";
import ControlBox from "./ControlBox";

const markerIcon = {
  url:
    'data:image/svg+xml;utf-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="%23EF4444"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" /></svg>',
  scaledSize: new window.google.maps.Size(40, 40),
};

class App extends React.Component {
  state = { place: "", map: undefined, bounds: undefined, marker: {} };

  loadMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.90203959362061, lng: -57.974069657098354 },
      zoom: 8,
      disableDefaultUI: true,
    });
    const bounds = new window.google.maps.LatLngBounds();

    this.setState({ map: map, bounds: bounds });
  };

  addMarker = (result, status) => {
    if (status == "OK") {
      this.setState({ marker: result.geometry.location });
      const marker = new window.google.maps.Marker({
        position: this.state.marker,
        map: this.state.map,
        icon: markerIcon,
      });
      this.state.bounds.extend(this.state.marker);
      this.state.map.fitBounds(this.state.bounds, { left: 400 });
    }
  };

  render() {
    return (
      <div>
        <ControlBox map={this.state.map} addMarker={this.addMarker} />
        <Map loadMap={this.loadMap} />
      </div>
    );
  }
}

export default App;
