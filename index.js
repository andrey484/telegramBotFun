var telegramBot = require('node-telegram-bot-api')
var token = '286997979:AAH5mo1nxCXct3x9DcjofNNp7MjBgjnibr8'
var bot = new telegramBot(token, {polling:true})

bot.on('message', function (msg) {
    var chatId = msg.chat.id
    console.log(msg)
    bot.sendMessage(chatId, "Hello!", {
        caption: "i bot"
    })
})