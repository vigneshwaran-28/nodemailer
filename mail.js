const nodemailer = require("nodemailer");
const str = require("./index");

let email, otp;

function getOtp(req, res) {
  let { mail } = req.body;
  email = mail;
  let { data } = req.body;
  let tableData = "";
  for (let i = 0; i < data.length; i++) {
    tableData +=
      "<tr><td>" + data[i].name + "</td><td>" + data[i].age + "</td></tr>";
    if (i == data.length - 1) tableData +=  "</table></body></html>";
  }
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "instagramig130@gmail.com",
      pass: "vyyssnluwtgfumzx",
    },
  });

  let mailDetails = {
    from: "instagramig130@gmail.com",
    to: email,
    subject: "Regarding ticket booking",
    // text: "Thank you for booking tickets details for booking tickets attached below",
    html: `Thank you for booking tickets details for booking tickets attached below${str}${tableData}`,
  };

  mailTransporter.sendMail(mailDetails, async function (err, data) {
    if (err) {
      res.status(400).json({ message: "Error occured in sending mail" });
    } else {
      try {
        res.status(200).json({ message: "Email sent successfully" });
      } catch (error) {
        console.log("error occured in inserting values!", error);
      }
    }
  });
}
module.exports = getOtp;
