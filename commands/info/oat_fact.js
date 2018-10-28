const commando = require('discord.js-commando');
const util = require("../../util.json");

class OatFactCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'oatfact',
            group: 'info',
            memberName:  'oatfact',
            description: 'Tells a fun fact about oatmeal'    
        });
    }

    async run(message, _args)
    {
        var randNum = Math.floor(Math.random() * util.numFacts);
        console.log(randNum);
        var factPrint = util.fact;
        message.reply(factPrint[randNum]);

    }
}

module.exports = OatFactCommand;