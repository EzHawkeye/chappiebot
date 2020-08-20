const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send({embed: { 
        color: 10181046,
        description: `Hallo dikzak`
     
      }});
        

    }

module.exports.help = {
    name: "hallo"
}