const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 3000
const path = require('path')
const dotenv = require('dotenv')
dotenv.config({path:"./.env"});


app.use('/static', express.static(path.join(__dirname, './static')))
app.use('/template', express.static(path.join(__dirname, './template')))

mongoose.connect(`mongodb+srv://chiragvgour:${process.env.MONGODB_PASSWORD}@mern-stack.jixph0o.mongodb.net/`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection successful'))
  .catch(err => console.error('MongoDB connection error:', err));

let contactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  phone: String,
  email: String,
  // password: String
})

let ContactForm = mongoose.model('contact-form', contactSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/index', (req, res) => {
  const success = req.query.success;
  res.sendFile(path.join(__dirname, './template/index.html'), { success: success });
})

app.post('/index', (req, res) => {
  const data = new ContactForm(req.body);
  data.save()
    .then(() => res.redirect('/index?success=true'))
    .catch(err => {
      console.error('Error saving data:', err);
      res.status(500).send("There is some technical error.");
    });
});

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})
