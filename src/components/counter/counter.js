import React from 'react';
import { useGlobal } from 'reactn';
import './counter.scss';

// Tell the user how many more cards are needed to make a multiple of 9.
const Counter = () => {

  // If the user has a multiple of 9 cards, do not display anything.
  const [ cards ] = useGlobal('cards');
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
};

export default Counter;
