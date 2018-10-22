import React from 'reactn';
import './add-card.scss';

export default class AddCard extends React.PureComponent {
  render() {
    return (
      <div className="card add-card">
        <button
          children="+"
          className="add-card-button"
          onClick={this.global.addCard}
          title="Add a new card."
        />
      </div>
    );
  }
}
