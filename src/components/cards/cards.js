import React from 'react';
import { connect } from 'react-redux';
import AddCard from '../add-card/add-card';
import Card from '../card/card';
import './cards.scss';

class Cards extends React.PureComponent {

  get cards() {
    return this.props.cards.map(card =>
      <Card
        key={card.key}
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

export default connect(
  ({ app }) => ({
    cards: app.cards
  })
)(Cards);
