module.exports = {
    name: 'pondervideo',
    description: 'this is a test command',
    execute(message,args,Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle("Video Ponder")
        .setDescription('Embed of smart chute ponder')
        .setImage('https://thumbs.gfycat.com/EasygoingSleepyIndianrockpython-size_restricted.gif')
        
        message.channel.send(newEmbed);
    }
}