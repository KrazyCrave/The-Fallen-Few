module.exports = {
    name: 'warn',
    description: "This mutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        

        if (target){

            let memberTarget = message.guild.members.cache.get(target.id);
           

            if(message.member.roles.cache.has('776281276138782760')){

                if (!args[1]) {
                    message.channel.send(`<@${memberTarget.user.id}> has recieved a warning`);
                    memberTarget.send('You have failed to follow one of the rules so you have recieved a warning')
                    return
                }
        }}
    }
}