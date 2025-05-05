// server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');

const app = express();
const port = 5000; // Change the port if necessary

// Middleware setup
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// EmailJS setup
const emailjsServiceID = process.env.VITE_EMAILJS_SERVICE_ID;
const emailjsOwnerTemplateID = process.env.VITE_EMAILJS_OWNER_TEMPLATE_ID;
const emailjsUserTemplateID = process.env.VITE_EMAILJS_USER_TEMPLATE_ID;
const emailjsPublicKey = process.env.VITE_EMAILJS_PUBLIC_KEY;

if (!emailjsServiceID || !emailjsOwnerTemplateID || !emailjsUserTemplateID || !emailjsPublicKey) {
  console.error('EmailJS credentials not set in environment variables!');
  process.exit(1); // Exit if environment variables are missing
}

// POST route for handling form submissions (like the contact form)
app.post('/send-email', (req, res) => {
  const { user_name, user_email, message } = req.body;

  // Email data for sending to the owner and the user
  const emailDataForOwner = {
    user_name,
    user_email,
    message,
  };

  const emailDataForUser = {
    user_name,
    user_email,
    message,
  };

  // Send email to owner (your email)
  emailjs.send(
    emailjsServiceID,
    emailjsOwnerTemplateID, // Template ID for owner's email
    emailDataForOwner,
    emailjsPublicKey
  )
  .then((response) => {
    console.log('Email sent to owner:', response);

    // After owner email is sent, send confirmation to the user
    emailjs.send(
      emailjsServiceID,
      emailjsUserTemplateID, // Template ID for user's confirmation email
      emailDataForUser,
      emailjsPublicKey
    )
    .then((response) => {
      console.log('Confirmation email sent to user:', response);
      res.status(200).send('Emails sent successfully');
    })
    .catch((error) => {
      console.error('Error sending user email:', error);
      res.status(500).send('Error sending confirmation email');
    });
  })
  .catch((error) => {
    console.error('Error sending owner email:', error);
    res.status(500).send('Error sending owner email');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

