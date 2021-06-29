const CreditCard = require('../../models').CreditCard;
const kg = require('../../encrypt/index');
var luhn = require("luhn");


module.exports = {
  create(req, res) {
    console.log(req.body);
    const { card_number, cvv, expiry_date } = req.body;
    if (!card_number || !cvv || !expiry_date) {
      return res.status(400).send({message: "Credit Card number, CVV or expiry date is missing!"})
    }
    var is_valid = luhn.validate(card_number);
    if (!is_valid) {
      return res.status(400).send({message: "Please enter a valid credit card number."})
    }
    let enc_number = kg.cypher(card_number);
    let enc_cvv = kg.cypher(cvv);
    return CreditCard
      .create({
        number: enc_number,
        cvv: enc_cvv,
        expiry: new Date(expiry_date)
      })
      .then(() => res.status(201).send({ message: "Your credit card is successfully created!" }))
      .catch(() => res.status(400).send({message: "Something went wrong. Please try again later!"}));
  },
};