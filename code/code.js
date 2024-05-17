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
  const webAppUrl = generateWebAppUrl(chatId); // Generate unique URL for web app
  const replyMarkup = {
    keyboard: [[{
      text: 'Перейти к сайту', // Text for the button
      web_app: { // Web App button object
        url: webAppUrl // Replace with your web app URL
      }
    }]]
  };

  bot.sendMessage(chatId, 'Здравствуйте!', replyMarkup);
});

// Implement web app logic here (e.g., routing, data handling)

app.listen(port, () => {
  console.log(Server listening on port ${port});
});

// Function to generate a unique URL for the web app (replace with your implementation)
function generateWebAppUrl(chatId) {
  // Use a service like Firebase Dynamic Links or a custom URL shortening service
  // to generate a unique URL for the web app, specific to the chat ID
  return https://sasharmz.github.io/Ramzancoin/ chat/${chatId}; // Replace with your actual URL
}
