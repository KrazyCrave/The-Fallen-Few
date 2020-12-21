module.exports = {
    name: 'staff',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '788129364876722186';
      
 
        const yellowTeamEmoji = '📝';
        
        
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('TFF Staff Application')
            .setDescription('Are looking to join the staff team and help run the org? Join us today!\n\n'
                + `Press the ${yellowTeamEmoji} to see the application!`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            let memberTarget = reaction.message.guild.members.cache.get(user.id);
            let r6 = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Here is your ticket!')
            .setDescription('Please fill out the following questions!\n\n'
                + `Age?\n`
                + `Why do you want to be staff?\n`
                + `How active are you?\n`
                + `What can you bring to the table that will help the org?\n`
                + `Previous experience being staff?\n`
                + `How long have you been in the server?\n`
                + `Do you agree to the terms that if you do not follow staff guidelines you will be demoted?\n`);
            
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).guild.channels.create('Staff Ticket', {
                        type: 'text',
                    }).then((channel) => {
                        console.log(channel)
                        const categoryId = '788528829110681600'
                        channel.setParent(categoryId)
                    }) 
    
                };
                await message.guild.channels.cache.find(i => i.name === 'staff-ticket').send(`<@${memberTarget.user.id}>`, r6)
            } else {
                return;
            }

            
        });

    }
}   