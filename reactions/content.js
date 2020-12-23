module.exports = {
    name: 'content',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '759208970328997919';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Facebook Content");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Twitch Streamer");
        const youTeamRole = message.guild.roles.cache.find(role => role.name === "Youtuber");
        const instaTeamRole = message.guild.roles.cache.find(role => role.name === "Instagram");
 
        const yellowTeamEmoji = '<:Facebook:759509736034402395>';
        const blueTeamEmoji = '<:Twitch:759509664638566450>';
        const youTeamEmoji = '<:Youtube:759509600218251314>';
        const instaTeamEmoji = '<:Instagram:759514680263049247> ';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('What platform do you stream on?')
            .setDescription('React with the platform!\n\n'
                + `${yellowTeamEmoji} for Facebook \n`
                + `${blueTeamEmoji} for Twitch\n`
                + `${youTeamEmoji} for Youtube\n`
                + `${instaTeamEmoji} for Instagram\n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(youTeamEmoji);
        messageEmbed.react(instaTeamEmoji);
 
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
                if (reaction.emoji.name === youTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(youTeamRole);
                }
                if (reaction.emoji.name === instaTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(instaTeamRole);
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
                if (reaction.emoji.name === youTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(youTeamRole);
                }
                if (reaction.emoji.name === instaTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(instaTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   