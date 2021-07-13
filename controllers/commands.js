const Discord = require('discord.js');
const embeds = require('./embeds');

module.exports = discordClient =>{
    // Set command prefix for additional capabilities
    const PREFIX = '?yeet';
    const REPORTFILE = 'crypto.signals.2021-07-12.json';
    const attachmentURI = process.env.bucketReportURI + REPORTFILE;

    discordClient.on('ready', () => {
        console.log(`Logged in as ${discordClient.user.tag}!`);
    });
    
    // Always respond to yeet... just cause
    discordClient.on('message', message => {
    
        if (message.content === 'yeet') {
            message.reply('counter-yeet');
        }
    });

    discordClient.on('message', message => {
        if (message.content === `${PREFIX} crypto`) {
            message.channel.send(embeds.cryptoSignalEmbed);
            message.channel.send(new Discord.MessageAttachment(attachmentURI));
            message.channel.send("**Thank you for using ATLAS and YIG Services**");
            console.log(`Crypto Report triggred by ${message.author.username}...`);
        } else if (message.content === `${PREFIX} stocks`) {
            message.channel.send(embeds.stockSignalEmbed);
            //message.channel.send(embeds.stockReportAttachment);
            message.channel.send("**Thank you for using ATLAS and YIG Services**");
            console.log(`Stock Report triggred by ${message.author.username}...`);
        } else if (message.content === `${PREFIX} server`) {
            message.channel.send(`Server name: ${message.guild.name}\nTotal Yeeters: ${message.guild.memberCount}`);
        } else if (message.content === `${PREFIX} user`) {
            message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
        } else if (message.content === `${PREFIX} help`) {
            message.channel.send(`Hi ${message.author.username},\nUseful ATLAS commands are: ?yeet crypto, ?yeet stocks`);
            console.log(`Help triggred by ${message.author.username}...`);
        }
    }); 
}