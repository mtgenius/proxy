import React from 'reactn';
import './counter.scss';

// Tell the user how many more cards are needed to make a multiple of 9.
export default class Counter extends React.PureComponent {
  render() {

    // If the user has a multiple of 9 cards, do not display anything.
    const cards = this.global.cards;
    if (cards.length % 9 === 0) {
      return null;
    }

    // Tell the user how many more cards are needed to make a multiple of 9.
    return (
      <div className="counter">
        Add{' '}
        <strong children={9 - cards.length % 9} />{' '}
        more.
      </div>
    );
  }
}
