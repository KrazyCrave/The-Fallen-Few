module.exports = {
    name: 'r6',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '776276599514857533';
      
 
        const yellowTeamEmoji = '📝';

        
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
                + `Press the ${yellowTeamEmoji} to apply for a team!`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).guild.channels.create('R6 Ticket', {
                        type: 'text',
                    }).then((channel) => {
                        console.log(channel)
                        const categoryId = '787553684010958849'
                        channel.setParent(categoryId)
                    })

                    let gap = await message.guild.channels.find(channel => channel.name==="R6 Ticket")
                    if (gap==true){
                        await message.channel.send('This is a test')
                    }
                }
            } else {
                return;
            }
            
        });

    }
}   


//.then(message.channel.send('This is a test!'))
//await message.guild.channels.cache.get(bob.name).message.channel.send(gap)

