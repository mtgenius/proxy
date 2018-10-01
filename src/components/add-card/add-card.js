import React from 'reactn';
import './add-card.scss';

class AddCard extends React.PureComponent {
  render() {
    return (
      <div className="card add-card">
        <button
          children="+"
          className="add-card-button"
          onClick={this.global.addCard}
        />
      </div>
    );
  }
}

export default AddCard;
