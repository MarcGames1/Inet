import { NextApiRequest, NextApiResponse } from 'next';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req: NextApiRequest, res: NextApiResponse) => {
  const msg = {
    to: 'george.marcu20@gmail.com', // Change to your recipient
    from: 'contact@iwebagency.ro', // Change to your verified sender
    subject: 'Cineva a completat formularul',
    text: JSON.stringify(req.body.data),
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error: any) => {
      console.error(error);
    });
};
