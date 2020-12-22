module.exports = {
    name: 'merch',
    description: "TFF Merch",
    execute(message, args){
        message.channel.send('https://teespring.com/stores/fallen-few');
    }
}