import React from 'react';
import { useGlobal } from 'reactn';
import AddCard from '../add-card/add-card';
import Card from '../card/card';
import './cards.scss';

// Render all cards in the global state, plus an additional Add Card button.
function Cards() {

  console.log('before useGlobal');
  const [ cards ] = useGlobal('cards');
  console.log('after useGlobal');

  // For each card in the global state, render a Card component.
  return (
    <div className="cards">
      {cards.map(card =>
        <Card
          key={card.id}
          {...card}
        />
      )}
      <AddCard />
    </div>
  );
};

export default Cards;
