import React from 'react';
import reactn from 'reactn';
import './add-card.scss';

class AddCard extends React.PureComponent {
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

export default reactn(AddCard);
