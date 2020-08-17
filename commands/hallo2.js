const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Hallo dikzak");

}

module.exports.help = {
    name: "Hallo"
}