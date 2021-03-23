import React from "react";
import SearchInput from "./SearchInput";
import SearchItem from "./SearchItem";
import ItemsContainer from "./ItemsContainer";

class ControlBox extends React.Component {
  state = { places: [], display: "hidden" };

  displaySuggestions = (suggestions, state) => {
    if (state === "OK") {
      const descriptions = suggestions.map((suggestion) => {
        return <SearchItem place={suggestion} />;
      });
      this.setState({ places: descriptions, display: "block" });
    }
  };

  render() {
    return (
      <div id="control-box" className="pl-3 pt-3 absolute z-50">
        <SearchInput displaySuggestions={this.displaySuggestions} />
        <ItemsContainer
          items={this.state.places}
          display={this.state.display}
        />
      </div>
    );
  }
}

export default ControlBox;
