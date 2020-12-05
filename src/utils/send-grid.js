require('dotenv').config();
const { SOFTELO_TRIP_SEND_GRID_KEY_ID } = process.env;
const sgMail = require('@sendgrid/mail');

const sendGrid = ({ to, from, subject, text, html }) => {
  console.log({ to, from, subject, text, html });
  sgMail.setApiKey(SOFTELO_TRIP_SEND_GRID_KEY_ID);
  const msg = {
    to,
    from,
    subject,
    text,
    html,
  };
  sgMail.send(msg);
};

module.exports = sendGrid;
