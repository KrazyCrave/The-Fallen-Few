module.exports = {
    name: 'games',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '776276599514857533';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Call of Duty");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "CoD Zombies");
        const r6TeamRole = message.guild.roles.cache.find(role => role.name === "Rainbow 6 Siege");
        const rlTeamRole = message.guild.roles.cache.find(role => role.name === "Rocket League");
        const warTeamRole = message.guild.roles.cache.find(role => role.name === "Warzone");
        const apexTeamRole = message.guild.roles.cache.find(role => role.name === "Apex Legends");
        const destinyTeamRole = message.guild.roles.cache.find(role => role.name === "Destiny");
        const fortTeamRole = message.guild.roles.cache.find(role => role.name === "Fortnite");
        const fallTeamRole = message.guild.roles.cache.find(role => role.name === "Fall Guys");
        const amongTeamRole = message.guild.roles.cache.find(role => role.name === "Among Us");
        const gtaTeamRole = message.guild.roles.cache.find(role => role.name === "GTA");
        const minecraftTeamRole = message.guild.roles.cache.find(role => role.name === "Minecraft");
 
        const yellowTeamEmoji = '<:cod:759464676898635816>';
        const blueTeamEmoji = '<:zombies:777342370416558081>';
        const r6TeamEmoji = '<:r6:759463730001215519>';
        const rlTeamEmoji = '<:rl:759505269641707550>';
        const warTeamEmoji = '<:wz:783525987992076309>';
        const apexTeamEmoji = '<:apex:783936633850036254> ';
        const destinyTeamEmoji = '<:destiny:783525670008389673> ';
        const fortTeamEmoji = '<:forkknife:759471656871264296> ';
        const fallTeamEmoji = '<:fallguys:759505456388767837> ';
        const amongTeamEmoji = '<:amongus:759505349098471444> ';
        const gtaTeamEmoji = '<:gta:783942054723452949> ';
        const minecraftTeamEmoji = '<:mine:783944003803545630> ';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('What games do you play?')
            .setDescription('React with what games you play!\n\n'
                + `${yellowTeamEmoji} for Call of Duty\n`
                + `${blueTeamEmoji} for Cod Zombies\n`
                + `${r6TeamEmoji} for Rainbow 6\n`
                + `${rlTeamEmoji} for Rocket League\n`
                + `${warTeamEmoji} for Warzone\n`
                + `${apexTeamEmoji} for Apex\n`
                + `${destinyTeamEmoji} for Destiny\n`
                + `${fortTeamEmoji} for Fortnite\n`
                + `${fallTeamEmoji} for Fall Guys\n`
                + `${amongTeamEmoji} for Among Us\n`
                + `${gtaTeamEmoji} for GTA\n`
                + `${minecraftTeamEmoji} for Minecraft\n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(r6TeamEmoji);
        messageEmbed.react(rlTeamEmoji);
        messageEmbed.react(warTeamEmoji);
        messageEmbed.react(apexTeamEmoji);
        messageEmbed.react(destinyTeamEmoji);
        messageEmbed.react(fortTeamEmoji);
        messageEmbed.react(fallTeamEmoji);
        messageEmbed.react(amongTeamEmoji);
        messageEmbed.react(gtaTeamEmoji);
        messageEmbed.react(minecraftTeamEmoji);
 
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
                if (reaction.emoji.name === r6TeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(r6TeamRole);
                }
                if (reaction.emoji.name === rlTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(rlTeamRole);
                }
                if (reaction.emoji.name === warTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(warTeamRole);
                }
                if (reaction.emoji.name === apexTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(apexTeamRole);
                }
                if (reaction.emoji.name === destinyTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(destinyTeamRole);
                }
                if (reaction.emoji.name === fortTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(fortTeamRole);
                }
                if (reaction.emoji.name === fallTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(fallTeamRole);
                }
                if (reaction.emoji.name === amongTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(amongTeamRole);
                }
                if (reaction.emoji.name === gtaTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gtaTeamRole);
                }
                if (reaction.emoji.name === minecraftTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(minecraftTeamRole);
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
                if (reaction.emoji.name === r6TeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(r6TeamRole);
                }
                if (reaction.emoji.name === rlTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rlTeamRole);
                }
                if (reaction.emoji.name === warTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(warTeamRole);
                }
                if (reaction.emoji.name === apexTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(apexTeamRole);
                }
                if (reaction.emoji.name === destinyTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(destinyTeamRole);
                }
                if (reaction.emoji.name === fortTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(fortTeamRole);
                }
                if (reaction.emoji.name === fallTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(fallTeamRole);
                }
                if (reaction.emoji.name === amongTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(amongTeamRole);
                }
                if (reaction.emoji.name === gtaTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gtaTeamRole);
                }
                if (reaction.emoji.name === minecraftTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(minecraftTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   