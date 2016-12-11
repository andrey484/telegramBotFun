var telegramBot = require('node-telegram-bot-api')
var token = '286997979:AAH5mo1nxCXct3x9DcjofNNp7MjBgjnibr8'
var bot = new telegramBot(token, {polling: true})


var notes = []

bot.on('text', function (msg) {
    var chatId = msg.chat.id
    var messageText = msg.text
    console.log(msg)
    bot.onText(/\/напомни (.+) в (.+)/, function (msg, match) {
        var userId = msg.from.id
        var text = match[1]
        var time = match[2]
        notes.push({
            'uid': userId,
            'time': time,
            'text': text
        })
        bot.sendMessage(userId, "напомню")
    })

    setInterval(function () {
        for (var i = 0; i < notes.length; i++) {
            var curDate = new Date().getHours() + ':' + new Date().getMinutes()
            if (notes[i]['time'] == curDate) {
                bot.sendMessage(notes[i]['uid'], 'Наопнинаю что вы должны ' + notes[i]['text'] + ' сейчас');
                notes.slice(i, 1);
            }
        }
    }, 60000);
})