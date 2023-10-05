const {Event} = require("./event.js")
const {Bot} = require("./bot.js")
exports.login=function login(options){
    const bot=new Bot(options.url)
    new Event(options.port, bot)
}