const mailer = require("@sendgrid/mail");

const mailSender = (message, email) => {
  const API_KEY = process.env.SEND_GRID_API_KEY;
  if (!API_KEY) return;
  mailer.setApiKey(API_KEY);
  console.log(email);
  const msg = {
    to: email,
    from: "myway-demo@gmail.com",
    subject: "Reset Password",
    text: `${message}`,
  };

  mailer
    .send(msg)
    .then((res) => console.log("Mail send successfully"))
    .catch((err) => console.log("Error in sending mail"));
};

module.exports = { mailSender };
