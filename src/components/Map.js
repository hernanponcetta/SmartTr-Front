import React from "react";

class Map extends React.Component {
  componentDidMount() {
    this.props.loadMap();
  }

  render() {
    return <div id="map" className="h-screen" />;
  }
}

export default Map;
