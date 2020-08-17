const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send(`**Je naam:** ${message.author.username}\n**Discord ID:** ${message.author.id}`);

}

module.exports.help = {
    name: "userinfo"
}