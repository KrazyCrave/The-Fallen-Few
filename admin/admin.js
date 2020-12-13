const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name:"admin",
    description:"Admin command",

    async run (client, message, args) {
        
        if(message.member.roles.cache.has('776281276138782760')){

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('The Fallen Few')
        .setAuthor(message.author.username)
        .setDescription('Admin Commands: clear | mute | unmute')
        .setThumbnail('https://media.discordapp.net/attachments/770711343686221846/781956340184383508/TFF.png?width=677&height=677')
        .setTimestamp()
        try {
        message.channel.send(exampleEmbed);
        } catch {
        message.reply('Sorry <@${message.author.username}> I cannot respond to you');
        }}

     }

   
}