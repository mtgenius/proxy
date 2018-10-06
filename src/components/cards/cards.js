import React from 'react';
import reactn from 'reactn';
import AddCard from '../add-card/add-card';
import Card from '../card/card';
import './cards.scss';

class Cards extends React.PureComponent {

  get cards() {
    return this.global.cards.map(card =>
      <Card
        key={card.id}
        {...card}
      />
    );
  }

  render() {
    return (
      <div className="cards">
        {this.cards}
        <AddCard />
      </div>
    );
  }
}

export default reactn(Cards);