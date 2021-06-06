const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'yeet') {
    msg.reply('counter-yeet');
  }
});


// If report is local to discord host
client.on('message', message => {
    // If the message is '!memes'
    if (message.content === '!memes') {
      // Get the buffer from the 'memes.txt', assuming that the file exists
      const buffer = fs.readFileSync('./crypto.TIMESTAMP.csv');
  
      /**
       * Create the attachment using MessageAttachment,
       * overwritting the default file name to 'memes.txt'
       * Read more about it over at
       * http://discord.js.org/#/docs/main/master/class/MessageAttachment
       */
      const attachment = new MessageAttachment(buffer, 'crypto.TIMESTAMP.csv');
      // Send the attachment in the message channel with a content
      message.channel.send(`${message.author}, here are your memes!`, attachment);
    }
});

// webhook configured to #crypto-signals-report for YIG Atlantis Club
const hook = new Discord.WebhookClient('843674945011318826', '-Ee7ddMeHX8MvZopsvxuZByW-6tO51VcqQTPC3keVMD3X5X97y8T7L6c82HNW0B6nVZe');
//https://discord.com/api/webhooks/843674945011318826/-Ee7ddMeHX8MvZopsvxuZByW-6tO51VcqQTPC3keVMD3X5X97y8T7L6c82HNW0B6nVZe

// Send a report to webhook
//hook.send('ATLAS n8n webhook');

client.login(process.env.BOT_TOKEN);