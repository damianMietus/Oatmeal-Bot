const Commando = require("discord.js-commando");
const bot = new Commando.Client();
//const config = require("./config.json");
const TOKEN = '/*Token goes here!*/'

bot.registry.registerGroup('game', 'Game');
bot.registry.registerGroup('info', 'Info');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

//bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on("message", function(message) {


  bot.on('ready', function(){
    console.log("Ready");
  })
 
bot.login(TOKEN);
