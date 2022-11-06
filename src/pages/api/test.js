const sgMail = require('@sendgrid/mail');
import { NextApiRequest, NextApiResponse } from 'next';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const msg = {
    to: 'george.marcu20@gmail.com', // Change to your recipient
    from: 'contact@iwebagency.ro', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
      res.send(200);
    })
    .catch((error) => {
      console.error(error);
    });
};
