import React from 'react';
import reactn from 'reactn';
import AddCard from '../add-card/add-card';
import Card from '../card/card';
import './cards.scss';

/*
ReactN decorator demo
*/

// Render all cards in the global state, plus an additional Add Card button.
class Cards extends React.Component {

  render() {

    // For each card in the global state, render a Card component.
    return (
      <div className="cards">
        {this.global.cards.map(card =>
          <Card
            key={card.id}
            {...card}
          />
        )}
        <AddCard />
      </div>
    );
  }
}

export default reactn(Cards);
