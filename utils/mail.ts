import { createTransport } from "nodemailer";
import { EMAIL_PASS, EMAIL_USER } from "../configs/env.variables";
import type Mail from "nodemailer/lib/mailer";

const createTransporter = () => {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  transporter.verify((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  return transporter;
};

export const sendMail = (data: Mail.Options) => {
  const transporter = createTransporter();

  transporter.sendMail(data, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Receiver accepted: ${info.messageId}`);
    }
  });

  transporter.close();
};
