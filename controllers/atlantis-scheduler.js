const Discord = require('discord.js');
const embeds = require('./embeds');
const schedule = require('node-schedule');
const prepAttach = require('./prepAttach');

module.exports = discordClient => {

    //init reoccuring rules
    const cryptoRule = new schedule.RecurrenceRule();
    const stockRule = new schedule.RecurrenceRule();
    
    // define time UTC
    cryptoRule.hour = 17;
    stockRule.hour = 0;
    stockRule.minute = 25;

    console.log("atlas-scheduler activated...");

    let atlantisClubCryptoJob = schedule.scheduleJob(cryptoRule, function(){
        try{
            let cryptoAttachmentURI = prepAttach.prepCryptoReportName('crypto');
            discordClient.channels.cache.get('840265345214578708').send(embeds.cryptoDailyEmbed);
            discordClient.channels.cache.get('840265345214578708').send(new Discord.MessageAttachment(cryptoAttachmentURI));
            console.log("crypto job successful...");
        } 
        catch (e) {
            console.log("Error crypto scheduler:", e);
        }
    });
    atlantisClubCryptoJob;
    let atlantisClubStockJob = schedule.scheduleJob(stockRule, function(){
        try {
            let stockAttachmentURI = prepAttach.prepStockReportName('stocks');
            let sectorAttachmentURI = prepAttach.prepStockReportName('sectors');
            discordClient.channels.cache.get('850086242926198794').send(embeds.stockDailyReportEmbed);
            discordClient.channels.cache.get('850086242926198794').send(new Discord.MessageAttachment(stockAttachmentURI));
            discordClient.channels.cache.get('850086242926198794').send(new Discord.MessageAttachment(sectorAttachmentURI));
            console.log("stock job successful...");
        } 
        catch (e) {
            console.log("Error stock scheduler:", e);
        }
    });
    atlantisClubStockJob;
}