const Discord = require('discord.js');
const client = new Discord.Client();
const figlet = require('figlet');
const colors = require('colors');
const readline = require('readline');
const commando = require(`discord.js-commando`);
const config = require('./config.json');
const bot = new commando.Client({
    commandPrefix:'!dm'
});

const cmdsArray = [
    "dmall <message>",
    "dmrole <role> <message>"
];
function clear() {
    bot.clear();
    bot.log(figlet.textSync("MassDM v3.2.0").green);
    bot.log("\n\nMass DM bot for Discord. Credit to Gringo(Scammer ALT)!\nSends DMs to selected members of guild.");
    bot.log(`\nForked and improved by Alex.\n Random send time set @ 0.01-${config.wait}s`);
    bot.log(`Type ${config.prefix}help in a chat.\n\n`);
}
client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("Made With MR.~ARMAN§")

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})

bot.registry.registerGroup('dms', 'help');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(config.token);

client.login(config.token);