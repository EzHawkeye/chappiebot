const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.guild.members.fetch().then(fetchedMembers => {
        const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
        // We now have a collection with all online member objects in the totalOnline variable
        message.channel.send({embed: {
            color: 15158332,
            description: `Er zijn momenteel **^2${totalOnline.size}** members online in Chappie's Clubhuis!`
          }});
    });


}

module.exports.help = {
    name: "online"
    name2: "Online"
}