const Telegraf = require('telegraf');

const bot = new Telegraf('7134206125:AAFSJKeneH3vmfa9XZc29L-SHqAEskKCg5U');

bot.on('message', (ctx) => {
  console.log(ctx.message.text); // Получить текст сообщения
  ctx.reply('Привет! Я получил ваше сообщение.'); // Отправить ответ
});

bot.launch();
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('7134206125:AAFSJKeneH3vmfa9XZc29L-SHqAEskKCg5U');

// Обработчик команды /start
bot.command('start', async (ctx) => {
  // Отправляем приветственное сообщение
  await ctx.sendMessage('Приветствую! ');

  // Создаем кнопку для подключения к mini app
  const miniAppButton = Markup.inlineKeyboardButton('Открыть mini app', {
    url: 'https://sasharmz.github.io/Ramzancoin/', // Ссылка на ваш mini app
  });

  // Добавляем кнопку к клавиатуре
  const keyboard = Markup.inlineKeyboard([
    [miniAppButton],
  ]);

  // Отправляем сообщение с кнопкой
  await ctx.sendMessage('Нажмите кнопку, чтобы открыть mini app:', {
    reply_markup: keyboard,
  });
});

// Запускаем бота
bot.launch();
