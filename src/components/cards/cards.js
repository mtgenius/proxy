import React from 'reactn';
import AddCard from '../add-card/add-card';
import Card from '../card/card';
import './cards.scss';

class Cards extends React.PureComponent {

  static getDerivedGlobalFromProps( _, global) {
    if (!global.cards) {
      return {
        cards: []
      };
    }
    return null;
  }

  get cards() {
    return this.global.cards.map(card =>
      <Card
        key={card.key}
      />
    );
  }

  render() {
    console.log(this.global.cards);
    return (
      <div className="cards">
        {this.cards}
        <AddCard />
      </div>
    );
  }
}

export default Cards;
