require('dotenv').config();
import {Bot, GrammyError, HttpError} from "grammy";
const bot = new Bot(process.env.BOT_API_TOKEN!);
//обработка комманд у бота
bot.command('start', async (ctx) => {
    await ctx.reply('Привет Карина! Этот бот и твой Владик любят тебя ♥.');
})
bot.command(['say_hello', 'hello', 'say_hi'], async (ctx) => {
    await ctx.reply('Hello!');
})

//обработка ответа на любое сообщение
bot.on('message', async (ctx) => {
    await ctx.reply('Надо подумать...');
})

bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`)
    const e = err.error;
    if (e instanceof GrammyError) {
        console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
        console.error("Could not contact Telegram:", e);
    } else {
        console.error("Unknown error:", e);
    }
})

bot.start();