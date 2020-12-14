const { MessageEmbed, GuildAuditLogs, GuildChannel } = require("discord.js");

module.exports = {
    name: 'r6',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '776276599514857533';
      
 
        const yellowTeamEmoji = '📝';
        
        
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('TFF|R6 Nova')
            .setDescription('Nova is the Xbox Rainbow 6 Siege Team for TFF!\n\n'
                + `Press the ${yellowTeamEmoji} to apply for a team!`);
 
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
                + `What is your gamertag:\n`
                + `How long have you been playing competitive:\n`
                + `Your rank this season and last season:\n`
                + `KD This season and last Season:\n`
                + `Timezone:\n`
                + `Why chose you?:\n`);
            
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).guild.channels.create('R6 Ticket', {
                        type: 'text',
                    }).then((channel) => {
                        console.log(channel)
                        const categoryId = '787553684010958849'
                        channel.setParent(categoryId)
                    }) 
    
                };
                await message.guild.channels.cache.find(i => i.name === 'r6-ticket').send(`<@${memberTarget.user.id}>`, r6)
            } else {
                return;
            }

            
        });

    }
}   


//.then(message.channel.send('This is a test!'))
//await message.guild.channels.cache.get(bob.name).message.channel.send(gap)
//await message.guild.channels.find(channel => channel.name == "r6-ticket").message.guilds.channels.send('This is a test!')

