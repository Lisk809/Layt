const { Event } = require("./event.js");
const { Bot } = require("./bot.js");
exports.login = function login(options) {
  const bot = new Bot(options.url);
  const event = new Event(options.port, bot);
  options.plugins.forEach((plugin_dir) => {
    const plugin = require(plugin_dir);
    plugin.onMounted.call(bot, event);
  });
};
