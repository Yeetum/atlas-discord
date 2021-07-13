const config = require('./config');
const Discord = require('discord.js');

const aiPng = config.aiPngURI;
const yeetumPNG = config.yeetumWhiteURI;
const disclaimer = 'Yeetum Investment Group cannot warranty the expressions and suggestions of the contents, as well as its accuracy. In addition, to the extent permitted by the law, Yeetum Investment Group shall not be responsible for any losses and/or damages due to the usage of the information on our website.\nBy using our services, you hereby consent to our disclaimer and agree to its terms. For these external sites, Yeetum Investment Group cannot be held liable for the availability of, or the content located on or through it.  Plus, any losses or damages occurred from using these contents or the internet generally.';
const REPORTFILE = 'crypto.signals.2021-07-12.json';
const reportURI = config.bucketReportURI + REPORTFILE;

const cryptoAttachment = new Discord.MessageAttachment(reportURI);
const cryptoSignalEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('YIG Atlantis Club Services')
    .setURL('https://www.yeetum.com')
    .setDescription('YIG FUMaaS Cryptos Signal Report')
    .setThumbnail(yeetumPNG)
    .setTimestamp()
    .setFooter('Disclaimer: ' + disclaimer, aiPng);


const stockReportAttachment = new Discord.MessageAttachment()
const stockSignalEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('YIG Atlantis Club Services')
    .setURL('https://www.yeetum.com')
    .setDescription('YIG FUMaaS Stock Signal Report')
    .setThumbnail(yeetumPNG)
    .setTimestamp()
    .setFooter('Disclaimer: ' + disclaimer, aiPng);


module.exports = {
    cryptoAttachment: cryptoAttachment,
    cryptoSignalEmbed: cryptoSignalEmbed,
    stockSignalEmbed: stockSignalEmbed
}