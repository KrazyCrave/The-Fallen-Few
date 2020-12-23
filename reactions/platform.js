module.exports = {
    name: 'platform',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '759208970328997919';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "PC");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Playstation");
        const xboxTeamRole = message.guild.roles.cache.find(role => role.name === "Xbox");
 
        const yellowTeamEmoji = '<:pc:759508001659813908>';
        const blueTeamEmoji = '<:ps4:759506001321525269>';
        const xboxTeamEmoji = '<:xbox:759505771674861599>';
 
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('What platform do you play on?')
            .setDescription('React with your gaming platform!\n\n'
                + `${yellowTeamEmoji} for PC\n`
                + `${blueTeamEmoji} for Playstation\n`
                + `${xboxTeamEmoji} for Xbox\n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(xboxTeamEmoji);
 
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
                if (reaction.emoji.name === xboxTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(xboxTeamRole);
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
                if (reaction.emoji.name === xboxTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(xboxTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   