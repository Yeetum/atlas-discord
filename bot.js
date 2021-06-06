const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'yeet') {
    msg.reply('yeet');
  }
});

//const hook = new Discord.WebhookClient('webhook id', 'webhook token');

// Send a message using the webhook
//hook.send('ATLAS webhook');

client.login(process.env.BOT_TOKEN);