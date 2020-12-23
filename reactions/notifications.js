module.exports = {
    name: 'notification',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '759208970328997919';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Alert");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "LFG");
        const teamTeamRole = message.guild.roles.cache.find(role => role.name === "Team News");
        const eventTeamRole = message.guild.roles.cache.find(role => role.name === "Events");
        const streamTeamRole = message.guild.roles.cache.find(role => role.name === "Stream Updates");
 
        const yellowTeamEmoji = '<:Alert:759795987438633021> ';
        const blueTeamEmoji = '📷';
        const teamTeamEmoji = '📝';
        const eventTeamEmoji = '🕹️';
        const streamTeamEmoji = '🗓️';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('What notifications do you want to recieve?')
            .setDescription('React with what you want notified about!\n\n'
                + `${yellowTeamEmoji} for Alert\n`
                + `${blueTeamEmoji} for LFG\n`
                + `${teamTeamEmoji} for Team News\n`
                + `${eventTeamEmoji} for Events\n`
                + `${streamTeamEmoji} for Stream Updates\n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(teamTeamEmoji);
        messageEmbed.react(eventTeamEmoji);
        messageEmbed.react(streamTeamEmoji);
 
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
                if (reaction.emoji.name === teamTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamTeamRole);
                }
                if (reaction.emoji.name === eventTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eventTeamRole);
                }
                if (reaction.emoji.name === streamTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(streamTeamRole);
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
                if (reaction.emoji.name === teamTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(teamTeamRole);
                }
                if (reaction.emoji.name === eventTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(eventTeamRole);
                }
                if (reaction.emoji.name === streamTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(streamTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   