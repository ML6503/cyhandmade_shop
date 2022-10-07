const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendActivationMail(email, link) {
    // send mail with defined transport object
    await this.transporter.sendMail({
      //   from: `CY Handmade shop <${process.env.SMTP_USER}@gmail.com>`, // sender address
      from: process.env.SMTP_USER, // sender address
      to: email, // list of receivers
      subject: 'Account activation at ' + process.env.API_URL, // Subject line
      text: '', // plain text body
      html: `
      <div>
      <h1>To activate your account please follow link below</h1>
      <a href="${link}">${link}</a>
      </div>`, // html body
    });
  }
}

module.exports = new MailService();
