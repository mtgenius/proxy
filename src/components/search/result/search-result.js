import React from 'react';
import './search-result.scss';

// Render each search result.
export default class SearchResult extends React.PureComponent {

  // When the search result is clicked, inform the parent what card was selected.
  handleClick = () => {
    this.props.onSelect({
      multiverseid: this.props.multiverseid,
      name: this.props.name,
      set: this.props.set
    });
  };

  render() {
    return (
      <div
        className="search-result"
        onClick={this.handleClick}
        title={this.props.name}
      >
        ({this.props.set}) {this.props.name}
      </div>
    );
  }
}
