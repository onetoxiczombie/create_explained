const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
}

client.on('ready', () => {
    console.log('Online!');
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ponder smartchute') {client.commands.get('pondersmartchute').execute(message, args, Discord);}
    if(command === 'pondervideo') {client.commands.get('pondervideo').execute(message, args, Discord);}

});

client.login('ODUzMTMwMDgyNDA2MzY3MjYy.YMQ5Tg.COPjeHG_nDlQiliYXqhJO5x9TFY');