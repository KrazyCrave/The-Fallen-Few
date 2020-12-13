const ms = require('ms');

module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Fans');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
 
            let memberTarget= message.guild.members.cache.get(target.id);
            
            if(message.member.roles.cache.has('776281276138782760')){

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        }}
    }
}