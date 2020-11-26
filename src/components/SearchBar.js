import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    search: "",
  };
  Typing = (e) => this.setState({ [e.target.name]: e.target.value });

  Searching = (e) => {
    e.preventDefault();
    this.props.searchCourse(this.state.search);
  };

  render() {
    return (
      <form onSubmit={this.Searching}>
        <input
          type="text3"
          name="search"
          placeholder="Search for a preview of available courses..."
          defaultValue={this.state.search}
          onChange={this.Typing}
        />
      </form>
    );
  }
}

export default SearchBar;
