const commando = require('discord.js-commando');
const util = require("../../util.json");

class OatHangmanCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'oathangman',
            group: 'game',
            memberName:  'oathangman',
            description: 'Play a game of Hangman with oatmeal related topics'    
        });
    }

    async run(message, _args)
    {
        var toss = Math.floor(Math.random() * 2);
        // No dmg hung
        //message.reply("\n /-----|\n |         |\n           |\n           |\n           |\n           |\n	       |\n-------|\n");

        // 1/4 dmg hung
        //message.reply("\n /-----|\n |         |\n O       |\n           |\n           |\n           |\n	       |\n-------|\n");

        // 2/4 dmg hung
        message.reply("\n /-----|\n |         |\n O       |\n  |        |\n           |\n           |\n	       |\n-------|\n");

        // 3/4 dmg hung
        message.reply("\n /-----|\n |         |\n O       |\n /|\\      |\n           |\n           |\n	       |\n-------|\n");
 

        //Full hung
        //message.reply("\n /-----|\n |         |\n O       |\n/|\\      |\n/ \\      |\n           |\n	       |\n-------|\n");

    }
}

module.exports = OatHangmanCommand;