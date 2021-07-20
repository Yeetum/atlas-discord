const Discord = require('discord.js');
const embeds = require('./embeds');
const schedule = require('node-schedule');

module.exports = discordClient => {
    const rule = new schedule.RecurrenceRule();
    console.log("atlantis-scheduler activated");
    rule.hour = 22;
    rule.minute = 5;
    const atlantisCryptoChannel = discordClient.channels.cache.get('840265345214578708');
    const atlantisStockChannel = discordClient.channels.cache.get('850086242926198794')


    const atlantisClubJob = schedule.scheduleJob(rule, function(){
        console.log("Atlantis Club job ran...")
        discordClient.once(atlantisCryptoChannel.send(embeds.cryptoSignalEmbed));
        discordClient.once(atlantisStockChannel.send(embeds.stockSignalEmbed));
        
        console.log('node-schdedue job executed for Synergy integration');
    });
    atlantisClubJob;
}