import React from 'reactn';
import './counter.scss';

export default class Counter extends React.PureComponent {
  render() {
    const cards = this.global.cards;
    if (cards.length % 9 === 0) {
      return null;
    }

    return (
      <div className="counter">
        Add{' '}
        <strong children={9 - cards.length % 9} />{' '}
        more.
      </div>
    );
  }
}
