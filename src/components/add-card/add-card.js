import React from 'react';
import { useGlobal } from 'reactn';
import './add-card.scss';

// Render a button that calls the global addCard reducer (with no parameters) on click.
const AddCard = () => {
  const addCard = useGlobal('addCard');
  return (
    <div className="card add-card">
      <button
        children="+"
        className="add-card-button"
        onClick={addCard}
        title="Add a new card."
      />
    </div>
  );
};

export default AddCard;
