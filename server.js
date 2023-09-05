const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 80
const path = require('path')

app.use('/static', express.static(path.join(__dirname, './static')))
app.use('/template', express.static(path.join(__dirname, './template')))

mongoose.connect('mongodb://127.0.0.1:27017/go-gym');
// console.log("connection confirm")

let contactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  phone: Number,
  email: String,
  password: String
})

let contactform = mongoose.model('contact-form', contactSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, './template/index.html'))
})

app.post('/index', (req, res) => {
  let data = new contactform(req.body);
  data.save().then(() => {
    res.sendFile(path.join(__dirname, './template/index.html'));
  }).catch((err) => {
    res.send("there is some technical error: ", err)
  });
})

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})