module.exports = {
    name: 'ponder smartchute',
    description: 'this is a test command',
    execute(message,args,Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle("Smart Chute")
        .setDescription('Embed of smart chute ponder')
        .addFields()
        //.setImage('https://media.giphy.com/media/thp2SIxnOhigHITv86/giphy.gif')
        .setImage()

        message.channel.send(newEmbed);
    }
}