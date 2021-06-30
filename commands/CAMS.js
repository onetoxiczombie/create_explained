module.exports = {
    name: 'CAMS',
    description: 'Test command, delete soon, it was all a joke.',
    execute(message,args,Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle("CAMS")
        .setDescription('CAMS stands for computer automated mining system. It involves a computer that CSH built in minecraft for some god forsaken reason.')
        .setImage('https://cdn.discordapp.com/attachments/553773155735437323/859724967561527336/unknown.png')

        message.channel.send(newEmbed);
    }
}
