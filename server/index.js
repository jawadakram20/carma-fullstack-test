const express = require('express');
const logger = require('morgan');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

require('./api/credit_card/router')(app);
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);

module.exports = app;