/**
 * This bot is designed for the Synergy by Yeetum Discord community. Built and managed by Yeetum Technologies.
 * 
*/

// Import modules & libraries
const Discord = require('discord.js');
require('dotenv').config();
const ociOS = require("oci-objectstorage");
const oci = require('oci-sdk');
const common = require("oci-common");
const config = require('./config');

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

/* (async () => {
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
        let todaydate = yyyy + '-' + mm + '-' + '08';
        console.log('Date time:', todaydate);

        const objectName = 'crypto.signals.' + today + '.json';
        console.log('Object Name:', objectName);

        const getObjectRequest = ociOS.requests.GetObjectRequest = {
            objectName: objectName,
            bucketName: bucketName,
            namespaceName: namespace,
            httpResponseContentEncoding: null
        };

        const getObjectResponse = await ociClient.getObject(getObjectRequest);
        console.log("Get Object executed...");
        console.log(getObjectResponse);
        console.log(getObjectResponse.data);
        console.log("Object Data:", JSON.stringify(getObjectResponse.value, 'utf8'));

        //console.log("Swifting through getObjectResponse...");
        //console.log(getObjectResponse);

        // TODO: Parse Object Storage Response for signals
        //console.log("Deserializing Object Response...");
        //console.log(getObjectResponse.value);


    } catch (e) {
        console.log("Error:", e);
    }
})();

function streamToString(stream) {
    let output = "";
    stream.on("data", function (data) {
        output += data.toString();
    });
    stream.on("end", function () {
        return output;
    });
} */


// Always respond to yeet... just cause
discordClient.on('message', message => {

    if (message.content === 'yeet') {
        message.reply('counter-yeet');
    }
});

// Init path to csv files 
const aiPng = config.aiPngURI;
const yeetumPNG = config.yeetumWhiteURI;
const REPORTFILE = 'crypto.signals.2021-07-12.json'
const reportURI = config.bucketReportURI + REPORTFILE;
const disclaimer_html = '***Yeetum Investment Group cannot warranty the expressions and suggestions of the contents, as well as its accuracy. In addition, to the extent permitted by the law, Yeetum Investment Group shall not be responsible for any losses and/or damages due to the usage of the information on our website.\nBy using our services, you hereby consent to our disclaimer and agree to its terms. The links contained on our website may lead to external sites, which are provided for convenience only.\nAny information or statements that appeared in these sites are not sponsored, endorsed, or otherwise approved by Yeetum Investment Group. For these external sites, Yeetum Investment Group cannot be held liable for the availability of, or the content located on or through it.  Plus, any losses or damages occurred from using these contents or the internet generally.***'

/* prep filepath to oci os
function prepFilePath(reportBucketUri){

}*/
discordClient.on('message', message => {
    if (message.content === `${PREFIX} crypto`) {
        const attachment = new Discord.MessageAttachment(reportURI);
        const cryptoSignalEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('YIG Atlantis Club Services')
            .setURL('https://www.yeetum.com')
            .setDescription('YIG FUMaaS Cryptos Signal Report')
            .setThumbnail(yeetumPNG)
            .addFields(
                { name: 'Disclaimer:', value: disclaimer_html }
            )
            .setTimestamp()
            .setFooter('Disclaimer: This is not financial advice. These signals are for analytical purposes only.', aiPng);
        message.channel.send(cryptoSignalEmbed);
        message.channel.send(attachment);
        message.channel.send('***Thank you for using ATLAS...***');
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