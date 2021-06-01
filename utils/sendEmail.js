// "use strict";
// const nodemailer = require("nodemailer");

// const sendEmail = async (options) => {
//   const { from, recipients, subject, message } = options;

//   try {
//     let transporter = nodemailer.createTransport({
//       host: "smtp-relay.sendinblue.com",
//       port: 587,
//       auth: {
//         user: "DivoFred",
//         pass: "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",
//       },
//     });
//     let mailStatus = await transporter.sendMail({
//       from: "fredrickemmanuelc@gmail.com",
//       to: options.to,
//       subject: options.subject,
//       html: options.text,
//     });
//     console.log(`Message sent: ${mailStatus.messageId}`);
//     return `Message sent: ${mailStatus.messageId}`;
//   } catch (error) {
//     console.log(error);
//     throw new Error(
//       `Something went wrong in sending mail. error: ${error.message}`
//     );
//   }

//   // const transporter = nodemailer.createTransport({
//   //   service: process.env.EMAIL_SERVICE,
//   //   auth: {
//   //     user: process.env.EMAIL_USERNAME,
//   //     pass: process.env.EMAIL_PASSWORD,
//   //   },
//   // });

//   // const mailOptions = {
//   //   from: process.env.EMAIL_FROM,
//   //   to: options.to,
//   //   subject: options.subject,
//   //   html: options.text,
//   // };

//   // transporter.sendMail(mailOptions, function (err, info) {
//   //   if (err) {
//   //     console.log(err);
//   //   } else {
//   //     console.log(info);
//   //   }
//   // });
// };

// module.exports = sendEmail;
