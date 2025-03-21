const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // Criar transportador SMTP
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Define as opções de email
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };

  // Enviar email
  const info = await transporter.sendMail(mailOptions);

  console.log(`Email enviado: ${info.messageId}`);
};

module.exports = sendEmail;
