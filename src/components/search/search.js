import React from 'reactn';
import Result from './result/search-result';
import './search.scss';

// Render a search box to find cards by name.
export default class Search extends React.PureComponent {

  state = {
    value: this.props.name
  };

  // When the user types a value, update the controlled component,
  //   then update the global state by fetching the search results
  //   with the global searchCard reducer.
  handleChange = e => {
    this.setState(
      { value: e.target.value },
      () => {

        // If the user entered anything, search for it using the API.
        if (this.state.value !== '') {
          this.global.searchCard(this.value);
        }
      }
    );
  };

  // Probably should have used forwardRef, but pass this ref to the parent component to manage focus.
  handleRef = ref => {
    this.props.onRef(ref);
  };

  // When the user selects a card, update the search box to share that card's name,
  //   then inform the parent component which card was selected.
  handleResultSelect = card => {
    this.setState(
      { value: card.name },
      () => {
        this.props.onResult(card);
      }
    )
  };

  // Display all results from the API.
  get results() {

    // If the user has not searched for anything, or the API has no responded to this search,
    //    do not display results yet.
    if (
      !this.state.value ||
      !Object.prototype.hasOwnProperty.call(this.global.searchedCards, this.value)
    ) {
      return null;
    }

    // Grab the search result for this string from the global state.
    const results = this.global.searchedCards[this.value];

    // If the API responded with an array of cards, display each as a Result component.
    if (Array.isArray(results)) {
      return results.map(card =>
        <Result
          key={card.multiverseid}
          onSelect={this.handleResultSelect}
          {...card}
        />
      );
    }

    // If the API responded with anything other than an array, display the error.
    return (
      <div
        children={results}
        className="search-error"
      />
    );
  }

  // Perform searches using lowercase.
  get value() {
    return this.state.value.toLowerCase();
  }

  render() {
    return (
      <div className="search">
        <input
          onChange={this.handleChange}
          placeholder="Card Name"
          ref={this.handleRef}
          type="text"
          value={this.state.value}
        />
        {this.results}
      </div>
    );
  }
}
