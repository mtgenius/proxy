import React from 'reactn';
import Search from '../search/search';
import './card.scss';

// Display a card.
export default class Card extends React.PureComponent {

  searchRef = null;

  // When the Copy button is clicked, add a copy of this card using the global addCard reducer.
  handleAdd = () => {
    this.global.addCard({
      multiverseid: this.props.multiverseid,
      name: this.props.name,
      set: this.props.set
    });
  };

  // Automatically focus the input field.
  handleMouseEnter = () => {
    if (this.searchRef) {
      this.searchRef.focus();
    }
  };

  // When the search box mounts, focus it.
  handleSearchRef = ref => {
    this.searchRef = ref;
    if (ref) {
      ref.focus();
    }
  };

  // When the user selects a search result, update this card to be the selected result
  //   by using the updateCard global reducer.
  handleSearchResult = result => {
    this.global.updateCard(this.props.id, result);
  };

  // When the Remove button is clicked, remove this card using the global removeCard reducer.
  handleSubtract = () => {
    this.global.removeCard(this.props.id);
  };

  // If a card is selected, render it.
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
