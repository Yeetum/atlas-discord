const config = require('../config');
const Discord = require('discord.js');
require('dotenv').config();
const prepReport = require('../controllers/prepAttach');

const aiPng = process.env.aiPngURI || config.aiPngURI;
const yeetumPNG = process.env.yeetumWhiteURI || config.yeetumWhiteURI;
const disclaimer = 'By using our services, you hereby consent to our disclaimer and agree to its terms.';
const footer = 'Thank you for using ATLAS and being apart of Synergy.';
const footerImage = process.env.footerImage || config.footerImage;

//let cryptoReport = new Discord.MessageAttachment(prepReport.prepCryptoReportName('crypto'));
//let stockReport = new Discord.MessageAttachment(prepReport.prepStockReportName('stocks'));
//let sectorReport = new Discord.MessageAttachment(prepReport.prepStockReportName('sectors'));



const cryptoSignalEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('ATLAS x Synergy')
    .setURL('https://www.yeetum.com')
    .setDescription('FUMaaS Cryptos Signal Report')
    .setThumbnail(yeetumPNG)
    .addField("Disclaimer:", disclaimer)
    .setTimestamp(new Date())
    .setFooter(footer, footerImage)
    .setImage(aiPng);

const cryptoDailyEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Eden Club Signals Intel')
    .setURL('https://www.yeetum.com')
    .setDescription('FUMaaS Daily Crypto Report')
    .setThumbnail(yeetumPNG)
    .addField("Disclaimer:", disclaimer)
    .setTimestamp(new Date())
    .setFooter(footer, footerImage)
    .setImage(aiPng);


const stockSignalEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('ATLAS x Synergy')
    .setURL('https://www.yeetum.com')
    .setDescription('FUMaaS Stock Signal Report')
    .setThumbnail(yeetumPNG)
    .addField("Disclaimer:", disclaimer)
    .setTimestamp(new Date())
    .setFooter(footer, footerImage)
    .setImage(aiPng);

const sectorReportEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('ATLAS x Synergy')
    .setURL('https://www.yeetum.com')
    .setDescription('FUMaaS Stock Sectors Report')
    .setThumbnail(yeetumPNG)
    .addField("Disclaimer:", disclaimer)
    .setTimestamp(new Date())
    .setFooter(footer, footerImage)
    .setImage(aiPng);

const stockDailyReportEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Eden Club Signals Intel')
    .setURL('https://www.yeetum.com')
    .setDescription('FUMaaS Daily Reports')
    .setThumbnail(yeetumPNG)
    .addField("Disclaimer:", disclaimer)
    .setTimestamp(new Date())
    .setFooter(footer, footerImage)
    .setImage(aiPng);

const edenClubEmbed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('Join the Eden Club')
.setURL('https://yeetum.com/edenclub')
.setDescription('^^^ Click Join the Eden Club above ^^^')
.setThumbnail(yeetumPNG)
.addField("Disclaimer:", disclaimer)
.setTimestamp(new Date())
.setFooter(footer, footerImage)
.setImage(aiPng);

const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('ATLAS x Synergy Discord Help')
    .setURL('https://www.yeetum.com')
    .setDescription('Useful Commands')
    .setThumbnail(yeetumPNG)
    .addFields(
		{ name: 'Crypto Signals Report', value: '?atlas crypto', inline: true },
		{ name: 'Stocks Signals Report', value: '?atlas stocks', inline: true },
        { name: 'Help', value: '?atlas help', inline: true }
	)
    .setTimestamp(new Date())
    .setFooter('Disclaimer: ' + disclaimer, footerImage)
    .setImage(aiPng);


module.exports = {
    cryptoSignalEmbed: cryptoSignalEmbed,
    stockSignalEmbed: stockSignalEmbed,
    sectorReportEmbed: sectorReportEmbed,
    cryptoDailyEmbed: cryptoDailyEmbed,
    stockDailyReportEmbed: stockDailyReportEmbed,
    atlantisClubEmbed: atlantisClubEmbed,
    helpEmbed: helpEmbed
}