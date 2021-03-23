import React from "react";
import Map from "./Map";
import ControlBox from "./ControlBox";

const App = () => {
  return (
    <div>
      <ControlBox />
      <Map
        id="map"
        onMapLoad={(map) => {
          let marker = new window.google.maps.Marker({
            position: { lat: -34.90203959362061, lng: -57.974069657098354 },
            map: map,
            title: "Hello La Plata!",
          });
        }}
      />
    </div>
  );
};

export default App;
