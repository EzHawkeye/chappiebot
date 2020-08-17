const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    // inside a command, event listener, etc.
    const exampleEmbed = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor(`Info For ${message.author.username}`)
        .setDescription(`• Hallo, degene die deze command heeft ingetypt is kanker gay,\n•**ID:** ${message.author.id}\n• **Nickname:** ${message.author.nickname !== null ? `Nickname: ${message.author.nickname}` : "None"}\n• **Bot?:** ${bot}`)
        .setThumbnail(message.author.displayAvatarURL())
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField(`\n**Status**`, `• **Status:** \n• **Activity:** ${member.user.presence.game ? `🎮 `: "Not Playing Anything"}`)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
    message.channel.send(exampleEmbed);

}

module.exports.help = {
    name: "embed"
}