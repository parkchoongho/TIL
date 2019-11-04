import React, { Component } from "react";

export default class SearchBar extends Component {
  onChange = e => {
    this.props.searchStock(e.target.value);
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="keyword">Search in Eng!</label>
          <input type="text" id="keyword" onChange={this.onChange} />
        </form>
      </>
    );
  }
}
