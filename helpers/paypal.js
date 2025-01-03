// const paypal = require("paypal-rest-sdk");

// paypal.configure({
//   mode: "",
//   client_id: "",
//   client_secret: "",
// });

// module.exports = paypal;


// helpers/paypal.js

const paypal = require('paypal-rest-sdk');

// Configuring PayPal with Sandbox credentials for testing
paypal.configure({
  mode: 'sandbox', // Use 'live' for production
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET'
});

module.exports = paypal;

