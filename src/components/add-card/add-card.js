import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCard } from '../../actions/app-actions';
import './add-card.scss';

class AddCard extends React.PureComponent {
  render() {
    return (
      <div className="card add-card">
        <button
          children="+"
          className="add-card-button"
          onClick={this.props.addCard}
        />
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ addCard }, dispatch)
)(AddCard);
