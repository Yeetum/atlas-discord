/**
 * This bot is designed for the Synergy by Yeetum Discord community. Built and managed by Yeetum Technologies.
 * 
*/
const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const ociOS = require("oci-objectstorage");
const common = require("oci-common");
const path = require('path');
// Set command prefix for additional capabilities
const PREFIX = '?yeet';
const discordClient = new Discord.Client();

/**
 * Discord init w/ ATLAS bot
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
*/
discordClient.on('ready', () => {
    console.log(`Logged in as ${discordClient.user.tag}!`);
  });

/*
* Note: there is a 2GB for 64-bit machine and 1GB for 32-bit machine buffer limitation from the NodeJS V8 Engine
* Cannot upload file size greater than the limit
*/

// Init OCI Object Storage Client
// Using personal configuration
const provider = new common.ConfigFileAuthenticationDetailsProvider();
const ociClient = new ociOS.ObjectStorageClient({
    authenticationDetailsProvider: provider
});

(async () => {
    try {
        console.log("Getting OCI OS Namespace...");
        const request = {};
        const nsResponse = await ociClient.getNamespace(request);
        const namespace = nsResponse.value;
        console.log('OCI OS Namespace:', namespace);

        const bucketName = 'fum_reports';

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + '06';
        console.log('Date time:', today);

        const objectName = 'crypto.signals.' + today + '.json';
        console.log('Object Name:', objectName);

        const getObjectRequest = {
            objectName: objectName,
            bucketName: bucketName,
            namespaceName: namespace
        };

        const getObjectResponse = await ociClient.getObject(getObjectRequest);
        console.log("Get Object executed successfully.");
        console.log("Object Data:", getObjectResponse.value);

    } catch (e) {
        console.log("Error:", e);
    }
})();


// Always respond to yeet... just cause
discordClient.on('message', message => {

    if (message.content === 'yeet') {
        message.reply('counter-yeet');
    }
});

discordClient.on('message', message => {
    if (message.content === `${PREFIX} crypto`) {
        //const obj = http.get('https://objectstorage.us-phoenix-1.oraclecloud.com/p/3VPOg9nO3fcgvNsVwztdq7tfvJbl2Nnp30KCD2T4y8bk3Wp5iLq_defZ9rjMQ8hB/n/ax8pmzkbraag/b/fum_reports/o/crypto.signals.2021-06-05.json');
        //message.channel.send(obj);
        message.channel.send('Crypto Signals Automation being developed');
    } else if (message.content === `${PREFIX} stocks`) {
        message.channel.send('Stock Signals Automation Dev');
    } else if (message.content === `${PREFIX} server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal Yeeters: ${message.guild.memberCount}`);
    } else if (message.content === `${PREFIX} user`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
});

// If PAR on Object Storage permits pulling
discordClient.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!signals') {
      // Create the attachment using MessageAttachment
      const attachment = new MessageAttachment('https://objectstorage.us-phoenix-1.oraclecloud.com/p/3VPOg9nO3fcgvNsVwztdq7tfvJbl2Nnp30KCD2T4y8bk3Wp5iLq_defZ9rjMQ8hB/n/ax8pmzkbraag/b/fum_reports/o/crypto.signals.2021-06-05.json');
      const finalAttached = attachment.
      // Send the attachment in the message channel
      message.channel.send(attachment);
    }
});


// If report is local to discord host
discordClient.on('message', message => {
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

discordClient.login(process.env.BOT_TOKEN);