import React from "react";
import SearchInput from "./SearchInput";
import PlacesContainer from "./PlacesContainer";

class ControlBox extends React.Component {
  state = { places: [], display: "hidden" };

  displayPlaces = (suggestions, state) => {
    if (state === "OK") {
      const places = suggestions;
      this.setState({ places: places, display: "block" });
    }
  };

  updateDisplay = (display) => {
    this.setState({ display: display });
  };

  render() {
    return (
      <div id="control-box" className="pl-3 pt-3 absolute z-50">
        <SearchInput displayPlaces={this.displayPlaces} />
        <PlacesContainer
          addMarker={this.props.addMarker}
          places={this.state.places}
          display={this.state.display}
          map={this.props.map}
        />
      </div>
    );
  }
}

export default ControlBox;
