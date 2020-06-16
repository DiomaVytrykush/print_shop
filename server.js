const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const port = process.env.PORT || 5000
const token = '1211973801:AAEWu40kbQBtzgPKbBq_WfJWgARajEVg70k';
const chatId = -484785615;
const bot = new TelegramBot(token, { polling: true });
const multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("myImage");
const router = express.Router();

app.post('/api/world', function (req, res) {
  upload(req, res, function (err) {
    console.log("Request file ---", req.file);//Here you get file.
    bot.sendMessage(chatId,
      `
    Ім'я відправника : ${req.body.name} 
    Номер телефону :  ${req.body.phone} 
    Назва товару :  ${req.body.orderName}
    Кількість товару :  ${req.body.orderCount}
    Загальна сума :  ${req.body.totalPrice}
    Місто відправника :  ${req.body.postCity}
    Область відправника :  ${req.body.postCityArea}
    Відділення нової пошти :  ${req.body.postNumber}
    Файл : ${req.file.filename}
  `)
    if (!err) {
      return res.send(200).end();
    }
  })
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));