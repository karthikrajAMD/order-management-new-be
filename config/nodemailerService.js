// "use strict";
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
// async..await is not allowed in global scope, must use a wrapper
const nodemailerService = async (toAddress, myLink) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: "true",
      auth: {
<<<<<<< HEAD
        user: process.env.MAIL_USERNAME, // generated ethereal user
        pass: process.env.MAIL_PASS, // generated ethereal password
=======
        user: "karthikraja.a.ece@gmail.com", // generated ethereal user
        pass: "jpxdjdhpfuizgnld", // generated ethereal password
>>>>>>> 5f0dfc73a571db4c020b19ab25358936f334f4bc
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.MAIL_USERNAME, // sender address
      to: `${toAddress}`, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Reset Link?", // plain text body
      html: `<b>${myLink}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("error", error);
  }
};

module.exports = { nodemailerService };
