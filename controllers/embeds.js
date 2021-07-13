const config = require('../config');
const Discord = require('discord.js');
require('dotenv').config();

const aiPng = process.env.aiPngURI || config.aiPngURI;
const yeetumPNG = process.env.yeetumWhiteURI || config.yeetumWhiteURI;
const disclaimer = 'Yeetum Investment Group cannot warranty the expressions and suggestions of the contents, as well as its accuracy. In addition, to the extent permitted by the law, Yeetum Investment Group shall not be responsible for any losses and/or damages due to the usage of the information on our website.\nBy using our services, you hereby consent to our disclaimer and agree to its terms. For these external sites, Yeetum Investment Group cannot be held liable for the availability of, or the content located on or through it.  Plus, any losses or damages occurred from using these contents or the internet generally.';
const footer = 'Thank you for using ATLAS and supporting Yeetum'

const cryptoSignalEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('YIG Atlantis Club Services')
    .setURL('https://www.yeetum.com')
    .setDescription('YIG FUMaaS Cryptos Signal Report')
    .setThumbnail(yeetumPNG)
    .addField("Disclaimer:", disclaimer)
    .setTimestamp()
    .setFooter(footer, aiPng);


const stockSignalEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('YIG Atlantis Club Services')
    .setURL('https://www.yeetum.com')
    .setDescription('YIG FUMaaS Stock Signal Report')
    .setThumbnail(yeetumPNG)
    .addField("Disclaimer:", disclaimer)
    .setTimestamp()
    .setFooter(footer, aiPng);

const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('YIG Atlantis Club Services')
    .setURL('https://www.yeetum.com')
    .setDescription('ATLAS Discord Help')
    .setThumbnail(yeetumPNG)
    .addFields(
		{ name: 'Help', value: 'Useful Commands' },
		{ name: 'Crypto', value: '?yeet crypto', inline: true },
		{ name: 'Stocks', value: '?yeet stocks', inline: true },
        { name: 'Help', value: '?yeet help', inline: true }
	)
    .setTimestamp()
    .setFooter('Disclaimer: ' + disclaimer, aiPng);


module.exports = {
    cryptoSignalEmbed: cryptoSignalEmbed,
    stockSignalEmbed: stockSignalEmbed,
    helpEmbed: helpEmbed
}