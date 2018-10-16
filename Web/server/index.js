const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();
const bodayParser = require("body-parser");
const nodemailer = require('nodemailer');

app.use(bodyParser.json());
app.use(bodayParser.urlencoded({ectended: false}));
app.use(express.static(`${__dirname}/../react-client/dist`));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

app.post("/api/form",(req,res)=>{
  nodemailer.createTestAccount((err,account)=>{
    const htmlEmail = `
    <h3>Contact Details</h3>
    <li>Email: ${req.body.email}</li>
    <li>Email: ${req.body.message}</li>`

    let transporter = nodemailer.createTransport({
      service:"Gmail",
      auth:{
        user:'',
        pass:''
      }
    })

    let mailOptions = {
      from:'seamaszhou@gmail.com',
      to:req.body.email,
      subject:"New message",
      text: req.body.message,
      html:htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) =>{
      if (err) {
        return console.log(err);
      }

      console.log("Message sent %s", info.message);
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(ifno));
    })
  })
});
