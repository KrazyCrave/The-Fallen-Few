const Discord = require("discord.js");

const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION' ]});

const db = require('quick.db');

const prefix = 'ff!';
 
const fs = require('fs');

const { token, default_prefix } = require('./config.json');

const config = require('./config.json');
const { send } = require("process");


client.commands = new Discord.Collection();
client.help = new Discord.Collection();
client.socialmedia = new Discord.Collection();
client.admin = new Discord.Collection();
client.reactions = new Discord.Collection();
client.tickets = new Discord.Collection();
client.music = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
const helpFiles = fs.readdirSync('./help/').filter(file => file.endsWith('.js'))
for(const file of helpFiles){
    const help = require(`./help/${file}`);

    client.help.set(help.name, help);

}

const socialmediaFiles = fs.readdirSync('./socialmedia/').filter(file => file.endsWith('.js'))
for(const file of socialmediaFiles){
    const socialmedia = require(`./socialmedia/${file}`);

    client.socialmedia.set(socialmedia.name, socialmedia);

}

const adminFiles = fs.readdirSync('./admin/').filter(file => file.endsWith('.js'))
for(const file of adminFiles){
    const admin = require(`./admin/${file}`);

    client.admin.set(admin.name, admin);

}

const reactionsFiles = fs.readdirSync('./reactions/').filter(file => file.endsWith('.js'))
for(const file of reactionsFiles){
    const reactions = require(`./reactions/${file}`);

    client.reactions.set(reactions.name, reactions);

}

const ticketsFiles = fs.readdirSync('./tickets/').filter(file => file.endsWith('.js'))
for(const file of ticketsFiles){
    const tickets = require(`./tickets/${file}`);

    client.tickets.set(tickets.name, tickets);

}

const musicFiles = fs.readdirSync('./music/').filter(file => file.endsWith('.js'))
for(const file of musicFiles){
    const music = require(`./music/${file}`);

    client.music.set(music.name, music);

}
 
client.once('ready', () => {
    console.log('It is online bitch');

    client.user.setActivity('ff!help', { type: "STREAMING"})
        .then(presence => console.log(`Activity set to ${presence.activites[0].name}`))
        .catch(console.error);
});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'twitter'){
        client.socialmedia.get('twitter').execute(message, args);
    } else if(command === 'instagram'){
        client.socialmedia.get('instagram').execute(message, args);
    } else if(command === 'twitch'){
        client.socialmedia.get('twitch').execute(message, args);
    } else if(command === 'disboard'){
        client.socialmedia.get('disboard').execute(message, args);
    } else if(command === 'lfc'){
        client.socialmedia.get('lfc').execute(message, args);
    } else if(command === 'mute'){
        client.admin.get('mute').execute(message, args);
    } else if(command === 'unmute'){
        client.admin.get('unmute').execute(message, args);
    } else if (command === 'clear'){
        client.admin.get('clear').execute(message, args);
    } else if (command === 'reactionrole'){
        client.reactions.get('reactionrole').execute(message, args, Discord, client);
    } else if (command === 'region'){
        client.reactions.get('region').execute(message, args, Discord, client);
    } else if (command === 'games'){
        client.reactions.get('games').execute(message, args, Discord, client);
    } else if (command === 'content'){
        client.reactions.get('content').execute(message, args, Discord, client);
    } else if (command === 'platform'){
        client.reactions.get('platform').execute(message, args, Discord, client);
    } else if (command === 'notification'){
        client.reactions.get('notification').execute(message, args, Discord, client);
    } else if (command === 'age'){
        client.reactions.get('age').execute(message, args, Discord, client);
    } else if (command === 'warn'){
        client.admin.get('warn').execute(message, args);
    } else if (command === 'r6'){
        client.tickets.get('r6').execute(message, args, Discord, client);
    } else if (command === 'rl'){
        client.tickets.get('rl').execute(message, args, Discord, client);
    } else if (command === 'staff'){
        client.tickets.get('staff').execute(message, args, Discord, client);
    } else if (command === 'welcome'){
        client.reactions.get('welcome').execute(message, args, Discord, client);
    } else if (command === 'play'){
        client.music.get('play').execute(message, args);
    } else if (command === 'leave'){
        client.music.get('leave').execute(message, args);
    } else if (command === 'blackjack'){
        client.commands.get('blackjack').execute(message, args, Discord, client);
    } else if(command === 'merch'){
        client.socialmedia.get('merch').execute(message, args);
    } else if(command === 'urban'){
        client.commands.get('urban').execute(message, args);
    } else if(command === 'canada'){
        client.commands.get('canada').execute(message, args);
    } else if(command === 'crave'){
        client.commands.get('crave').execute(message, args);
    } else if(command === 'enaty'){
        client.commands.get('enaty').execute(message, args);
    } else if(command === 'demise'){
        client.commands.get('demise').execute(message, args);
    } 
});




client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = await db.get(`prefix_${message.guild.id}`);
    if(prefix === null) prefix = default_prefix;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();

        if(!client.help.has(command));
         try {
            client.help.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        } 

        if(!client.socialmedia.has(command));
            try {
            client.socialmedia.get(command).run(client, message, args);
        } catch (error){
            console.error(error);
        }

        if(!client.admin.has(command));
            try {
            client.admin.get(command).run(client, message, args);
        } catch (error){
            console.error(error);
        }
        
        if(!client.tickets.has(command));
            try {
            client.tickets.get(command).run(client, message, args);
        } catch (error){
            console.error(error);
        }

        if(!client.commands.has(command));
            try {
            client.commands.get(command).run(client, message, args);
        } catch (error){
            console.error(error);
        }
        
    }

})

client.on("message", (message) => {
   
    const responseObject = {
        "Can I join the clan?": "For what game?",
        "fortnite": "Message Hades",
      };
   
    if(responseObject[message.content]) {
      message.channel.send(responseObject[message.content]);
    }
  });

 
client.login(config.token);
