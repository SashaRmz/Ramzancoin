const TelegramBot = require('node-telegram-bot-api');

const token = '7134206125:AAFSJKeneH3vmfa9XZc29L-SHqAEskKCg5U'
const webAppUrl = 'https://sasharmz.github.io/Ramzancoin/';

const bot = new TelegramBot(token, {polling: true});

bot.on(event: 'massage', listener: async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start') {
    await bot.sendMassage(chatId, text: 'ttttt', form: {
      reply_markup: {
        keyboard: [
          [{text: 'ttttttt', web_app: {url: webAppUrl}}]
            ]
      }
           })
    await bot.sendMessage(chatId, text: 'tttttt', form {
      reply_markup: {
        inline_keyboard: [
          [{text: 'tttttt', web_app: {url: webAppUrl}}]
          ]
    }
      })
           }
            });

    
