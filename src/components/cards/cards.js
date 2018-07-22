import React from 'react';
import AddCard from '../add-card/add-card';
import Card from '../card/card';

class Cards extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cards: []
		};
	}

	render() {
		return (
			<div className="cards-component">
				{this.state.cards.map(card =>
					<Card {...card} />
				)}
				<AddCard />
			</div>
		);
	}
}

export default Cards;
