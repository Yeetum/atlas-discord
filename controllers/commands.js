const Discord = require('discord.js');
const embeds = require('./embeds');
const prepAttach = require('./prepAttach');

module.exports = discordClient =>{
    // Set command prefix for additional capabilities
    const PREFIX = '?atlas';

    discordClient.on('ready', () => {
        console.log(`Logged in as ${discordClient.user.tag}!`);
    });
    
    // Always respond to yeet... just cause
    discordClient.on('message', message => {
    
        if (message.content === 'yeet') {
            message.reply('counter-yeet');
        }
    });

    //  report types ['crypto','stocks'] pass one of the string values to prepAttach param 2
    discordClient.on('message', message => {
        if (message.content === `${PREFIX} crypto`) {
            message.channel.send(embeds.cryptoSignalEmbed);
            let attachmentURI = prepAttach.prepReportName('crypto');
            console.log('Crypto Report URI', attachmentURI);
            message.channel.send(new Discord.MessageAttachment(attachmentURI));
            console.log(`Crypto Report triggred by ${message.author.username}...`);
        } else if (message.content === `${PREFIX} stocks`) {
            message.channel.send(embeds.stockSignalEmbed);
            let attachmentURI = prepAttach.prepReportName('stocks');
            message.channel.send(new Discord.MessageAttachment(attachmentURI));
            console.log(`Stock Report triggred by ${message.author.username}...`);
        } else if (message.content === `${PREFIX} server`) {
            message.channel.send(`Server name: ${message.guild.name}\nTotal Yeeters: ${message.guild.memberCount}`);
        } else if (message.content === `${PREFIX} user`) {
            message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
        } else if (message.content === `${PREFIX} help`) {
            message.channel.send(embeds.helpEmbed);
            console.log(`Help triggred by ${message.author.username}...`);
        }
    }); 
}