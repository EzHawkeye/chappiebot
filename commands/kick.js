const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



    message.channel.send(":apple:***SONDAGE :apple:\n "+choix1+" ou "+""+choix2+"***")
    .then(function (message) {
message.react("👍")
  message.react("👎")
       message.pin()
  message.delete()
        });


}

module.exports.help = {
    name: "kick"
}