"use strict";
const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "matchdownxx@gmail.com",
      pass: "theresafred", // naturally, replace both with your real credentials or an application-specific password
    },
  });

  const mailOptions = {
    from: "divo_fred",
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info);
    }
  });
};

module.exports = sendEmail;
