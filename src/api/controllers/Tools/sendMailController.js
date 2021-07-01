const nodemailer = require('nodemailer');

module.exports = {
  sendMail: () => (req, res, next) => {
    const { email, message, subject } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sheylayaker@gmail.com',
        pass: 'Laboratoria2020',
      },
    });

    const mailOptions = {
      from: 'sheylayaker@gmail.com',
      to: email,
      subject,
      text: message,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Email enviado: ' + info.response);
      }
    });
  },
};
