const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send({embed: {
        color: 15158332,
        description: `Weet je zeker dat je die persoon wilt kicken? `
        message.react('✅');
        message.react('❌');
      }});

    if(react === "✅"){
        return message.reply("Haha, grapjee xxx")
    }
}

module.exports.help = {
    name: "kick"
}