import memoizeOne from 'memoize-one';
import React from 'react';
import reactn from 'reactn';
import Search from '../search/search';
import './card.scss';

const cardStyle = multiverseid => ({
  backgroundImage: `url("http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseid}&type=card")`
});

class Card extends React.PureComponent {

  _cardStyle = memoizeOne(cardStyle);

  get cardStyle() {
    if (this.props.multiverseid) {
      return this._cardStyle(this.props.multiverseid);
    }
    return null;
  }

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

  render() {
    return (
      <div
        className="card"
        style={this.cardStyle}
      >
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
