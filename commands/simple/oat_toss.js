const commando = require('discord.js-commando');

class OatTossCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'oattoss',
            group: 'simple',
            memberName:  'oattoss',
            description: 'Flips an oat, which lands on Heads or Tails'    
        });
    }

    async run(message, _args)
    {
        var toss = Math.floor(Math.random() * 2);
        if (toss == 0){
            message.reply("Your oat landed on Heads!");
        } else {
            message.reply("Your oat landed on Tails!");
        }
    }
}

module.exports = OatTossCommand;