const db = require('quick.db')
const Discord = require('discord.js');

module.exports = {
    name:"socialmedia",
    description:"Social Media command",

    async run (client, message, args) {
    
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('The Fallen Few')
        .setAuthor(message.author.username)
        .setDescription('SocialMedia Commands: twitter | twitch | instagram | disboard | lfc ')
        .setThumbnail('https://media.discordapp.net/attachments/770711343686221846/781956340184383508/TFF.png?width=677&height=677')
        .setTimestamp()
        try {
        message.channel.send(exampleEmbed);
        } catch {
        message.reply('Sorry <@${message.author.username}> I cannot respond to you');
        }
    }
}