const Commando = require("discord.js-commando");
const bot = new Commando.Client();
//const config = require("./config.json");
const TOKEN = 'NTA1NTQ1NDU4NzczMzkzNDEx.DrVLOA.yCy3vrKvzW2FDBc8rCh93fhy9I4'

bot.registry.registerGroup('game', 'Game');
bot.registry.registerGroup('info', 'Info');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

//bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on("message", function(message) {
    //if (message.author.bot) return;
    // This is where we'll put our code.
    
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hi');
    }

  });

  bot.on('ready', function(){
    console.log("Ready");
  })
 
bot.login(TOKEN);