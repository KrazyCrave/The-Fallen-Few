

module.exports = {
    name: 'rl',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '788129364876722186';
      
 
        const jellowEmoji = '📝';
        
        
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('TFF|RL Tempest')
            .setDescription('Tempest is a team that is currently c3-gcs, and we are a meme-team. We dont take things too seriously but we know how to when it is needed!\n\n'
                + `Press the ${jellowEmoji} to apply for a team!`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(jellowEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            let memberTarget = reaction.message.guild.members.cache.get(user.id);
            let rl = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Here is your ticket!')
            .setDescription('Please fill out the following questions!\n\n'
                + `What is your playtime? (hours)\n`
                + `What rank are you currently?\n`
                + `What is your peak? (rank and mmr)\n`
                + `What is your preferred playlist(s)?\n`
                + `Have you been on a team before?\n`
                + `What makes you think you would be a good addition to the team?\n`
                + `Why do you wanna join a team?\n`);
            
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === jellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).guild.channels.create('ticket', {
                        type: 'text',
                    }).then((channel) => {
                        console.log(channel)
                        const categoryId = '788129792587333663'
                        channel.setParent(categoryId)
                    }) 
    
                };
                await message.guild.channels.cache.find(i => i.name === 'rl-ticket').send(`<@${memberTarget.user.id}>`,rl)
            } else {
                return;
            }

            
        });

    }
}   