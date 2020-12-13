const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name:"info",
    description:"info about the bot",

    async run (client, message, args){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('The Fallen Few')
        .setAuthor(message.author.username)
        .setDescription('We are a new organization for gamers founded by a few friends who decided to break off on their own and strike it big with their vision in mind. An organization with no petty politics, no favouring and 0 tolerance for abuse of power. We are The Fallen Few, we offer many games, with more to be added regularly. We are also an environment that is 0 tolerance to hate, racism, and any/all slurs, slang words or anything that is targeted at someone’s sexual orientation, gender identification, etc. So what are you waiting for? Party games? Check! Comp games? Check! Join The Fallen Few today and find out truly what we have to offer!')
        .setThumbnail('https://media.discordapp.net/attachments/770711343686221846/781956340184383508/TFF.png?width=677&height=677')
        .setTimestamp()
        try {
            message.channel.send(exampleEmbed);
        } catch {
            message.reply('Sorry <@${message.author.username}> I cannot respond to you');
        }
    }
}