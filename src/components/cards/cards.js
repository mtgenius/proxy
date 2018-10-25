import React from 'reactn';
import AddCard from '../add-card/add-card';
import Card from '../card/card';
import './cards.scss';

// Render all cards in the global state, plus an additional Add Card button.
export default class Cards extends React.PureComponent {

  // For each card in the global state, render a Card component.
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
