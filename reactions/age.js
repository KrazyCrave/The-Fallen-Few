module.exports = {
    name: 'age',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '759208970328997919';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "13-17");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "18+");
 
        const yellowTeamEmoji = '🔴';
        const blueTeamEmoji = '🔵';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('What is your age?')
            .setDescription('React to your age group!\n\n'
                + `${yellowTeamEmoji} for 13-17\n`
                + `${blueTeamEmoji} for 18+`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
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
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   