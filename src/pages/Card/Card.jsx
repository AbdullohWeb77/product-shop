import React, { useState } from 'react';
import './Card.scss';

const Card = ({ cardNumber, cardHolder, expiration, type }) => {
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiration: '',
    type: 'Visa'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCardData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('cardData', JSON.stringify(cardData));
    setCardData({
      cardNumber: '',
      cardHolder: '',
      expiration: '',
      type: 'Visa'
    });
  };

  return (
    <div className="card">
      <h2>Visa Card Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={cardData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolder">Card Holder</label>
          <input
            type="text"
            name="cardHolder"
            id="cardHolder"
            value={cardData.cardHolder}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiration">Expiration Date</label>
          <input
            type="text"
            name="expiration"
            id="expiration"
            value={cardData.expiration}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Card;