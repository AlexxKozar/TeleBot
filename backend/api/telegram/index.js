import TelegramBot from 'node-telegram-bot-api';


export const initTelegramBot = () => {
    const token = 'YOUR_TELEGRAM_BOT_TOKEN';
    const bot = new TelegramBot(token, {polling: true});

    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
    
        // send a message to the chat acknowledging receipt of their message
        bot.sendMessage(chatId, 'Received your message');
    });
}

