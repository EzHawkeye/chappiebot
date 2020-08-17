const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


a
   return message.channel.send("Weet je zeker dat je de gebruiker wilt kicken?")
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