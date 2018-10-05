import React from 'react';
import reactn from 'reactn';
import './counter.scss';

class Counter extends React.PureComponent {
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

export default reactn(Counter);
