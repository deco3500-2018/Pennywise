const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();
const bodayParser = require("body-parser");
const nodemailer = require('nodemailer');

global.price;
global.items;

app.use(bodyParser.json());
app.use(bodayParser.urlencoded({ectended: false}));
app.use(express.static(`${__dirname}/../react-client/dist`));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

app.post("/api/price",(req,res)=>{
  price = req.body.itemPrice;
  items = req.body.itemList;
  console.log(price);
  console.log(items);
})

app.post("/api/prices",(req,res)=>{
res.send(price);
console.log("123");
})

app.post("/api/form",(req,res)=>{
  nodemailer.createTestAccount((err,account)=>{

    const htmlEmail = `
    <h3>Hi ${req.body.email}</h3>
    <p>${req.body.name} is using Puzzle Pay to control their spending habits, and wants you to help them. Below is their item cart that they want to buy: ${price} ${items}</p>
    <p>If you agree what they are buying, you can tell them the solution to the puzzle below:</p>
    <h1>expenses, items, struggle</h1>
    <p>Thank you,</p>
      <p>PuzzlePay</p>`

      const htmlEmail1 = `
      <h3>Hi ${req.body.email}</h3>
      <p>${req.body.name} is using Puzzle Pay to control their spending habits, and wants you to help them. Below is their item cart that they want to buy: ${price} ${items}</p>
      <p>If you agree what they are buying, you can tell them the solution to the puzzle below:</p>
      <h1>2, 3, 6</h1>
      <p>Thank you,</p>
        <p>PuzzlePay</p>`


        const htmlEmail2 = `
        <h3>Hi ${req.body.email}</h3>
        <p>${req.body.name} is using Puzzle Pay to control their spending habits, and wants you to help them. Below is their item cart that they want to buy: ${price} ${items}</p>
        <p>If you agree what they are buying, you can tell them the solution to the puzzle below:</p>
        <h1>6th row 7th letter, row 3 1st letter, row 4 1st letter</h1>
        <p>Thank you,</p>
          <p>PuzzlePay</p>`


    let transporter = nodemailer.createTransport({
      service:"Gmail",
      auth:{
        user:'seamaszhou@gmail.com',
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

    let mailOptions1 = {
      from:'seamaszhou@gmail.com',
      to:req.body.email,
      subject:"New message",
      text: req.body.message,
      html:htmlEmail1
    }

    let mailOptions2 = {
      from:'seamaszhou@gmail.com',
      to:req.body.email,
      subject:"New message",
      text: req.body.message,
      html:htmlEmail2
    }

if (req.body.order == 0) {
  transporter.sendMail(mailOptions, (err, info) =>{
    if (err) {
      return console.log(err);
    }

    return console.log("sent");
  })

}


if (req.body.order == 1) {
  transporter.sendMail(mailOptions1, (err, info) =>{
    if (err) {
      return console.log(err);
    }

    return console.log("sent");
  })

}


if (req.body.order == 2) {
  transporter.sendMail(mailOptions2, (err, info) =>{
    if (err) {
      return console.log(err);
    }

    return console.log("sent");
  })

}


  })
});
