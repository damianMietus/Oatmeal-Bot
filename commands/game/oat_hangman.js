const commando = require('discord.js-commando');
const discord = require('discord.js');
const util = require("../../util.json");
var gameOn = false;
var health;
var word = "";
var guessedList = "";
var guessedStr = "";
var boardWord = "";
var gameBoard = new discord.RichEmbed();
var healthFour = "\n /-----|\n  |        |\n           |\n           |\n           |\n           |\n	       |\n-------|\n";
var healthOne = "\n /-----|\n  |        |\n O       |\n /|\\    |\n           |\n           |\n	       |\n-------|\n";
var healthTwo = "\n /-----|\n  |        |\n O       |\n  |        |\n           |\n           |\n	       |\n-------|\n";
var healthThree = "\n /-----|\n  |        |\n O       |\n           |\n           |\n           |\n	       |\n-------|\n";

class OatHangmanCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'oathm',
            group: 'game',
            memberName:  'oathm',
            description: 'Play a game of Hangman with oatmeal related topics'    
        });
    }

    async run(message, args)
    {

        var j = 0;
        var passFlag = false;
        var doubleFlag = false;
        var gameReset = false;
        var youreWinnerFlag = false;

        // Guesses go in here
        if (gameOn === true){
           
            if (args[0] === undefined ){
                message.channel.send("Invalid game input. You must input '!oathm' followed by a space and a single alphabetical character");
                return;
            }

            var guess = args[0].toLowerCase();
            console.log("guess = "+guess);

            //Check if already guessed
            console.log("gs list ="+guessedList.length);
            if (guessedList.length !== undefined){
                for (j = 0; j < guessedList.length; j++){
                    if (guessedList[j] === guess){
                        doubleFlag = true;
                    }
                }
            }
            console.log("db flag=" + doubleFlag);

            if (alphaCheck(guess) === null){
                message.channel.send("Input must be alphabetical");
                return;
            } else if (doubleFlag === true){
                message.channel.send("This has already been guessed");
                return;
            } else {

                passFlag = false;

                for (j = 0; j < word.length; j++){

                    if (word[j] === guess){
                        boardWord = replaceAt(boardWord, j, guess);

                        passFlag = true;
                    }
                }

                if (passFlag === true){
                    console.log("boardWord = "+boardWord);
                    guessedList = guessedList + guess;

                    if (boardWord === word){
                        youreWinnerFlag = true;
                    }
                    //console.log("Shouldnt I print the board?");
                   // gameBoard
                    if (health === 4){
                        gameBoard
                        .setTitle(healthFour, false)
                        .setFooter(boardWord)
        
                        message.channel.sendEmbed(gameBoard);
                        message.channel.send(guessedStr);
                    } else if (health === 3){
                        gameBoard
                        .setTitle(healthThree, false)
                        .setFooter(boardWord)
        
                        message.channel.sendEmbed(gameBoard);
                        message.channel.send(guessedStr);
                    } else if (health === 2){
                        gameBoard
                        .setTitle(healthTwo, false)
                        .setFooter(boardWord)
        
                        message.channel.sendEmbed(gameBoard);
                        message.channel.send(guessedStr);
                    } else if (health === 1){
                        gameBoard
                        .setTitle(healthOne, false)
                        .setFooter(boardWord)
        
                        message.channel.sendEmbed(gameBoard);
                        message.channel.send(guessedStr);
                    }
                } else {
                    //missed!
                    guessedStr = guessedStr + guess;
                    guessedList = guessedList + guess;
                    health = health-1;

                    if (health === 3){
                        gameBoard
                        .setTitle(healthThree, false)
                        .setFooter(boardWord)
                        console.log("Health of "+health+"\n"+healthThree);
        
                        message.channel.sendEmbed(gameBoard);
                        message.channel.send(guessedStr);
                    } else if (health === 2){
                        gameBoard
                        .setTitle(healthTwo, false)
                        .setFooter(boardWord)
                        console.log("Health of "+health+"\n"+healthTwo);
        
                        message.channel.sendEmbed(gameBoard);
                        message.channel.send(guessedStr);
                    } else if (health === 1){
                        gameBoard
                        .setTitle(healthOne, false)
                        .setFooter(boardWord)
                        console.log("Health of "+health+"\n"+healthOne);
        
                        message.channel.sendEmbed(gameBoard);
                        message.channel.send(guessedStr);
                    } else if (health === 0){

                        gameBoard
                        .setTitle("\n /-----|\n  |        |\n O       |\n/|\\      |\n/ \\      |\n           |\n	       |\n-------|\n", false)
                        message.channel.sendEmbed(gameBoard);
                        message.channel.send(guessedStr);
                        message.channel.send("You're loser!");

                        gameReset = true;

                    }

                }

            }

        }
        // Initialize the game here
        if (gameOn === false){
            message.channel.send("The game has begun, guess letters by typing in '!oathm <letter>'");
            gameOn = true;

            var rand = Math.floor(Math.random() * util.numWords);
            word = util.hmWord[rand];
            boardWord = "";
            guessedList = "";
            guessedStr = "Missed Letters: ";
            health = 4;
    
            var i;
            for (i = 0; i < word.length; i++){
                if (word[i] === ' '){
                    boardWord = boardWord + ' ';
                } else {
                    boardWord = boardWord + '-';
                }
            }
            console.log(boardWord);

            gameBoard
            .setTitle("\n /-----|\n  |        |\n           |\n           |\n           |\n           |\n	       |\n-------|\n", boardWord,false)
            .setColor('GREEN')
            .setFooter(boardWord)

            message.channel.sendEmbed(gameBoard);

        }

        if (gameReset === true){
            gameOn = false;
        }
        if (youreWinnerFlag === true){
            message.channel.send("Conglaturation, you're winner!");
            gameOn = false;
        }
    }
}

module.exports = OatHangmanCommand;

function alphaCheck(input){
    return input.match("^[a-zA-Z]+$");    
}
/** Author of this Function: Efe Naci Giray
 * Retrieved from https://gist.github.com/efenacigiray/9367920
 * October 28 2018
 */ 
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}
