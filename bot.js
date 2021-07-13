/**
 * This bot is designed for the Synergy by Yeetum Discord community. Built and managed by Yeetum Technologies.
 * 
*/

// Import modules & libraries
const Discord = require('discord.js');
require('dotenv').config();
const config = require('./config');
const embeds = require('./embeds');
const schedule = require('node-schedule');

// Set command prefix for additional capabilities
const PREFIX = '?yeet';


/**
 * Discord init w/ ATLAS bot
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
*/
const discordClient = new Discord.Client();
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
        message.channel.send(embeds.cryptoAttachment);
        message.channel.send("**Thank you for using ATLAS and YIG Services**");
    } else if (message.content === `${PREFIX} stocks`) {
        message.channel.send('Stock Signals Automation Dev');
    } else if (message.content === `${PREFIX} server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal Yeeters: ${message.guild.memberCount}`);
    } else if (message.content === `${PREFIX} user`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
});

//TODO Webhook n8n and fdk integration/automation
// webhook configured to #crypto-signals-report for YIG Atlantis Club

//const hook = new Discord.WebhookClient('843674945011318826', '-Ee7ddMeHX8MvZopsvxuZByW-6tO51VcqQTPC3keVMD3X5X97y8T7L6c82HNW0B6nVZe');
//https://discord.com/api/webhooks/843674945011318826/-Ee7ddMeHX8MvZopsvxuZByW-6tO51VcqQTPC3keVMD3X5X97y8T7L6c82HNW0B6nVZe

// Send a report to webhook
//hook.send('ATLAS n8n webhook');

discordClient.login(process.env.BOT_TOKEN);
const rule = new schedule.RecurrenceRule();
rule.hour = 016;
rule.tz = 'Etc/UTC';

schedule.scheduleJob(rule, function(){
    Discord.on('ready', client => {
        client.channels.get('840265345214578708').send(embeds.cryptoSignalEmbed);
    })
    console.log('node-schdedue job for crypto-signals');
});