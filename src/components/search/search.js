import React from 'reactn';
import Result from './result/search-result';
import './search.scss';

export default class Search extends React.PureComponent {

  state = {
    value: this.props.name
  };

  handleChange = e => {
    this.setState(
      { value: e.target.value },
      () => {
        if (this.state.value !== '') {
          this.global.searchCard(this.value);
        }
      }
    );
  };

  handleRef = ref => {
    this.props.onRef(ref);
  };

  handleResultSelect = card => {
    this.setState(
      { value: card.name },
      () => {
        this.props.onResult(card);
      }
    )
  };

  get results() {
    if (
      !this.state.value ||
      !Object.prototype.hasOwnProperty.call(this.global.searchedCards, this.value)
    ) {
      return null;
    }
    const results = this.global.searchedCards[this.value];
    if (Array.isArray(results)) {
      return results.map(card =>
        <Result
          key={card.multiverseid}
          onSelect={this.handleResultSelect}
          {...card}
        />
      );
    }
    return (
      <div
        children={results}
        className="search-error"
      />
    );
  }

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
