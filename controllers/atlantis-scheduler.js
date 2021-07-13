const Discord = require('discord.js');
const embeds = require('./embeds');
const schedule = require('node-schedule');

module.exports = discordClient => {
    const rule = new schedule.RecurrenceRule();
    console.log("atlantis-scheduler activated");

    const atlantisClubJob = schedule.scheduleJob({hour: 16, minute: 20, dayOfWeek: 0}, function(){
        
        discordClient.channels.get('840265345214578708').send(embeds.cryptoSignalEmbed);
        discordClient.channels.get('850086242926198794').send(embeds.stockSignalEmbed);
        
        console.log('node-schdedue job executed for Synergy integration');
    });
    atlantisClubJob;
}