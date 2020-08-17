const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    message.reply('The bot will now shut down.\n'
    + 'Confirm with a thumb up or deny with a thumb down.');

// Reacts so the user only have to click the emojis
message.react('👍').then(r => {
    message.react('👎');
});

// First argument is a filter function
message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
    { max: 1, time: 30000 }).then(collected => {
            if (collected.first().emoji.name == '👍') {
                    message.reply('Shutting down...');
                    client.destroy();
            }
            else
                    message.reply('Operation canceled.');
    }).catch(() => {
            message.reply('No reaction after 30 seconds, operation canceled');
    });

break;
}  
}
});


}

module.exports.help = {
    name: "kick"
}