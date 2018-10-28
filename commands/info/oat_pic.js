const commando = require('discord.js-commando');
const util = require("../../util.json");

class OatPicCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'oatpic',
            group: 'info',
            memberName:  'oatpic',
            description: 'Displays various pictures of oatmeal'    
        });
    }

    async run(message, _args)
    {
        var randNum = Math.floor(Math.random() * util.numPics);
        console.log(randNum);
        var picPrint = util.pic;
        message.reply(picPrint[randNum]);

    }
}

module.exports = OatPicCommand;