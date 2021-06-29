import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState();
  const [cvv, setCvv] = useState();
  const [expiryDate, setExpiryDate] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (!cardNumber || !(/^\d+$/.test(cardNumber))) {
      return alert("Please Enter numeric card number.")
    }
    if (!cvv || !(/^\d+$/.test(cvv))) {
      return alert("Please Enter numeric three digit cvv.")
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ card_number: cardNumber, cvv, expiry_date: expiryDate })
    };
    fetch(`/api/credit_card`, requestOptions)
      .then(response => response.json())
      .then(data => alert(data.message));
  }
  return (
    <Form>
      <FormGroup row>
        <Label for="credit_card_number" sm={10}>Credit Card Number</Label>
        <Col md={12} sm={10}>
          <Input type="text" name="card_number" id="credit_card_number" placeholder="Enter Valid credit card number" maxLength="19" onChange={(e) => {
            setCardNumber(e.target.value)
          }} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="cvv" sm={2}>CVV</Label>
        <Col md={12} sm={10}>
          <Input type="text" name="cvv" id="cvv" placeholder="Enter three digit CVV" maxLength="3" onChange={(e) => {
            setCvv(e.target.value)
          }} />
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="expiry" sm={10}>Expiry Date</Label>
        <Col md={12} sm={10}>
          <Input type="text" name="expiry" id="expiry" placeholder="YYYY/MM" onChange={(e) => {
            setExpiryDate(e.target.value)
          }} />
        </Col>
      </FormGroup>
      
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

export default CreditCardForm;