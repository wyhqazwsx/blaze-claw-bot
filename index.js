const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error('❌ 请设置 TELEGRAM_BOT_TOKEN 环境变量');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });
console.log('🔥 BlazeClawBot 烈焰龙虾机器人已启动！');

// /start 指令
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '🦞🔥 欢迎来到烈焰龙虾机器人！发送 /龙虾 召唤我吧！');
});

// /龙虾 指令
bot.onText(/\/龙虾/, (msg) => {
  bot.sendMessage(msg.chat.id, '🦞🔥 你的专属烈焰龙虾已上线！有什么吩咐？');
});
