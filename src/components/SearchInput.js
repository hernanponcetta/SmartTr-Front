import React from "react";
import SearchItem from "./SearchItem";

const service = new window.google.maps.places.AutocompleteService();

class SearchInput extends React.Component {
  state = { value: "" };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    if (this.state.value !== "") {
      service.getQueryPredictions(
        { input: this.state.value },
        this.props.displaySuggestions
      );
    }
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="w-96 border border-gray-300 text-gray-800 rounded-md outline-none p-3"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchInput;
