import React from 'react';
import reactn from 'reactn';
import Search from '../search/search';
import './card.scss';

class Card extends React.PureComponent {

  handleAdd = () => {
    this.global.addCard({
      multiverseid: this.props.multiverseid,
      name: this.props.name,
      set: this.props.set
    });
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
          src={`http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${this.props.multiverseid}&type=card`}
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
