const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
*/
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'yeet') {
    msg.reply('counter-yeet');
  }
});

// If PAR on Object Storage permits pulling
client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!signals') {
      // Create the attachment using MessageAttachment
      const attachment = new MessageAttachment('https://objectstorage.us-phoenix-1.oraclecloud.com/p/3VPOg9nO3fcgvNsVwztdq7tfvJbl2Nnp30KCD2T4y8bk3Wp5iLq_defZ9rjMQ8hB/n/ax8pmzkbraag/b/fum_reports/o/crypto.signals.2021-06-05.json');
      // Send the attachment in the message channel
      message.channel.send(attachment);
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