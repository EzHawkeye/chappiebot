const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.reply("Weet je zeker dat je deze gebruiker wilt kicken?");

    return reply.react('👍').then(() => message.react('👎'));

    const filter = (reaction, user) => {
        return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
    
            if (reaction.emoji.name === '👍') {
                message.channel.reply('Grapjee, xxx we love you');
            } else {
                message.channel.reply('Ik stop zo die kanker duim in je moeders kut !');
            }
        })
        .catch(collected => {
            message.reply('Waarom heb je niet gereageerd kanker sukkel?');
        });
}

module.exports.help = {
    name: "kick"
}