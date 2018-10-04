import React from 'react';
import './search-result.scss';

export default class SearchResult extends React.PureComponent {

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
