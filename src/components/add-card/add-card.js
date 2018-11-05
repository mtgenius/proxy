import React from 'reactn';
import './add-card.scss';

/*
ReactN reducer demo
*/

// Render a button that calls the global addCard reducer (with no parameters) on click.
class AddCard extends React.Component {
  render () {
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
};

export default AddCard;
