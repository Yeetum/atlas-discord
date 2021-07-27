const Discord = require('discord.js');
const embeds = require('./embeds');
const schedule = require('node-schedule');
const prepAttach = require('./prepAttach');

module.exports = discordClient => {
    const rule = new schedule.RecurrenceRule();
    console.log("atlantis-scheduler activated");
    rule.hour = 13;
    rule.minute = 25;


    let atlantisClubJob = schedule.scheduleJob(rule, function(){
        try{
            discordClient.channels.cache.get('840265345214578708').send(embeds.cryptoSignalEmbed);
            let cryptoAttachmentURI = prepAttach.prepReportName('crypto');
            discordClient.channels.cache.get('840265345214578708').send(new Discord.MessageAttachment(cryptoAttachmentURI));
            
            let stockAttachmentURI = prepAttach.prepReportName('stocks');
            discordClient.channels.cache.get('850086242926198794').send(embeds.stockSignalEmbed);
            discordClient.channels.cache.get('850086242926198794').send(new Discord.MessageAttachment(stockAttachmentURI));
        } 
        catch (e) {
            console.log("Error:", e);
        }
    });
    atlantisClubJob;
}