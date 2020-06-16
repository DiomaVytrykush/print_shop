const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const port = process.env.PORT || 5000
const token = '1211973801:AAEWu40kbQBtzgPKbBq_WfJWgARajEVg70k';
const chatId = -484785615;
const bot = new TelegramBot(token, { polling: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
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
  `)
  bot.sendPhoto(chatId,
    `Файл : ${req.body.file}`
  );
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