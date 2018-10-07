import React from 'react';
import reactn from 'reactn';
import Search from '../search/search';
import './card.scss';

class Card extends React.PureComponent {

  searchRef = null;

  handleAdd = () => {
    this.global.addCard({
      multiverseid: this.props.multiverseid,
      name: this.props.name,
      set: this.props.set
    });
  };

  handleMouseEnter = () => {
    if (this.searchRef) {
      this.searchRef.focus();
    }
  };

  handleSearchRef = ref => {
    this.searchRef = ref;
    if (ref) {
      ref.focus();
    }
  };

  handleSearchResult = result => {
    this.global.updateCard(this.props.id, result);
  };

  handleSubtract = () => {
    this.global.removeCard(this.props.id);
  };

  get image() {
    if (this.props.multiverseid) {
      return (
        <img
          alt={this.props.name}
          className="card-image"
          height="100%"
          src={'https://i.mtgeni.us/' + this.props.multiverseid + '.png'}
          width="100%"
        />
      );
    }
    return null;
  }

  render() {
    return (
      <div
        className="card"
        onMouseEnter={this.handleMouseEnter}
        style={this.cardStyle}
      >
        {this.image}
        <span
          children="+"
          className="card-add"
          onClick={this.handleAdd}
          title="Copy this card."
        />
        <Search
          name={this.props.name || ''}
          onRef={this.handleSearchRef}
          onResult={this.handleSearchResult}
        />
        <span
          children="-"
          className="card-subtract"
          onClick={this.handleSubtract}
          title="Remove this card."
        />
      </div>
    );
  }
}

export default reactn(Card);
