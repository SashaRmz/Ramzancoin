const TelegramBotAPI = require('node-telegram-bot-api');
const express = require('express');
const app = express();
const port = 3000;

// Replace with your bot token
const botToken = '7134206125:AAFSJKeneH3vmfa9XZc29L-SHqAEskKCg5U';

const bot = new TelegramBotAPI(botToken);

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const webAppUrl = generateWebAppUrl(chatId); // Generate unique URL
  const message = Привет! Перейдите по ссылке, чтобы запустить наше веб-приложение: ${webAppUrl};

  bot.sendMessage(chatId, message);
});

// Implement web app logic here (e.g., routing, data handling)

app.listen(port, () => {
  console.log(Server listening on port ${port});
});
