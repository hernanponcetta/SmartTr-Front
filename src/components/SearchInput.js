import React from "react";

class SearchInput extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="w-96 border border-gray-300 text-gray-800 rounded-md outline-none p-3"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </form>
    );
  }
}

export default SearchInput;
