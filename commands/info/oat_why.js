const commando = require('discord.js-commando');
const util = require("../../util.json");

class OatWhyCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'oatwhy',
            group: 'info',
            memberName:  'oatwhy',
            description: 'Provides a reason as to why you should be eating oatmeal'    
        });
    }

    async run(message, _args)
    {
        var randNum = Math.floor(Math.random() * util.numWhys);
        console.log(randNum);
        var factPrint = util.why;
        message.reply(factPrint[randNum]);

    }
}

module.exports = OatWhyCommand;