/**
 * This bot is designed for the Synergy by Yeetum Discord community. Built and managed by Yeetum Technologies.
 * 
*/

// Import modules & libraries
const Discord = require('discord.js');
require('dotenv').config();
const commands = require('./controllers/commands');
const atlantisScheduler = require('./controllers/atlantis-scheduler');


/**
 * Discord init w/ ATLAS bot
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
*/
const discordClient = new Discord.Client();
commands(discordClient);
atlantisScheduler(discordClient);

//TODO Webhook n8n and fdk integration/automation
// webhook configured to #crypto-signals-report for YIG Atlantis Club

//const hook = new Discord.WebhookClient('843674945011318826', '-Ee7ddMeHX8MvZopsvxuZByW-6tO51VcqQTPC3keVMD3X5X97y8T7L6c82HNW0B6nVZe');
//https://discord.com/api/webhooks/843674945011318826/-Ee7ddMeHX8MvZopsvxuZByW-6tO51VcqQTPC3keVMD3X5X97y8T7L6c82HNW0B6nVZe

// Send a report to webhook
//hook.send('ATLAS n8n webhook');

discordClient.login(process.env.BOT_TOKEN);