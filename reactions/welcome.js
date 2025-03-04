module.exports = {
    name: 'welcome',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '759208970328997919';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Fans");

 
        const yellowTeamEmoji = '✉️';
        
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Finished role assign?')
            .setDescription('\n\n'
                + `Click ${yellowTeamEmoji} to show you are finished with role assign`);
    
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
       
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   