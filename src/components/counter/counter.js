import React from 'react';
import { withGlobal } from 'reactn';
import './counter.scss';

/*
ReactN withGlobal demo
*/

const PER_PAGE = 9;

// Tell the user how many more cards are needed to make a multiple of 9.
class Counter extends React.PureComponent {

  render() {

    // If the user has a multiple of 9 cards, do not display anything.
    if (this.props.remaining === 0) {
      return null;
    }

    // Tell the user how many more cards are needed to make a multiple of 9.
    return (
      <div className="counter">
        Add{' '}
        <strong children={this.props.remaining} />{' '}
        more.
      </div>
    );
  }
};

export default withGlobal(global => {
  const remaining = PER_PAGE - global.cards.length % PER_PAGE;
  if (remaining === PER_PAGE) {
    return { remaining: 0 };
  }
  return { remaining };
})(Counter);
