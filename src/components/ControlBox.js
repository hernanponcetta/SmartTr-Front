import React from "react";
import SearchInput from "./SearchInput";
import ResultContainer from "./ResultContainer";

class ControlBox extends React.Component {
  state = { places: [], display: "hidden", value: "" };

  displayPlaces = (suggestions, state) => {
    if (state === "OK") {
      const places = suggestions;
      this.setState({ places: places, display: "block" });
    }
  };

  handleChange = (event) => {
    const service = new window.google.maps.places.AutocompleteService();

    this.setState({ value: event.target.value });

    if (this.state.value !== "") {
      service.getPlacePredictions(
        { input: this.state.value },
        this.displayPlaces
      );
    }
  };

  resetInput = () => {
    this.setState({ display: "hidden", value: "" });
  };

  render() {
    return (
      <div id="control-box" className="pl-3 pt-3 absolute z-50">
        <SearchInput
          displayPlaces={this.displayPlaces}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <ResultContainer
          addMarker={this.props.addMarker}
          resetInput={this.resetInput}
          places={this.state.places}
          display={this.state.display}
          map={this.props.map}
        />
      </div>
    );
  }
}

export default ControlBox;
