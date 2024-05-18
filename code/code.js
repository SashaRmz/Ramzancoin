const Telegraf = require('telegraf');

const bot = new Telegraf('7134206125:AAFSJKeneH3vmfa9XZc29L-SHqAEskKCg5U');

bot.on('message', (ctx) => {
  console.log(ctx.message.text); // Получить текст сообщения
  ctx.reply('Привет! Я получил ваше сообщение.'); // Отправить ответ
});

bot.launch();
