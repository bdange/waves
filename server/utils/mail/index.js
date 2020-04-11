const mailer = require('nodemailer');
const { welcome } = require('./welcome_template');
const { purchase } = require('./puchase_template');
const { resetPass } = require('./resetpass_template');
require('dotenv').config();

const getEmailData = (to, name, token, template, actionData) => {
  let data = null;

  switch (template) {
    case 'welcome':
      data = {
        from: 'capacityjet@gmail.com',
        to,
        subject: `Welcome to waves ${name}`,
        html: welcome(),
      };
      break;
    case 'purchase':
      data = {
        from: 'capacityjet@gmail.com',
        to,
        subject: `Thanks for shopping with us ${name}`,
        html: purchase(actionData),
      };
      break;
    case 'reset_password':
      data = {
        from: 'capacityjet@gmail.com',
        to,
        subject: `Hey ${name}, reset your password`,
        html: resetPass(actionData),
      };
      break;
    default:
      data;
  }

  return data;
};

const sendEmail = (to, name, token, type, actionData = null) => {
  const smtpTransport = mailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'capacityjet@gmail.com',
      pass: process.env.EMAIL_PASS,
    },
  });

  const mail = getEmailData(to, name, token, type, actionData);

  smtpTransport.sendMail(mail, function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log('email sent');
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
