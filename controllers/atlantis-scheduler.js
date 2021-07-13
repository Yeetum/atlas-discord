const Discord = require('discord.js');
const embeds = require('./embeds');
const schedule = require('node-schedule');

module.exports = discordClient => {
    const rule = new schedule.RecurrenceRule();
    rule.hour = 016;
    rule.tz = 'Etc/UTC';
    console.log("atlantis-scheduler activated");

    schedule.scheduleJob(rule, function(){
        discordClient.on('ready', client => {
            client.channels.get('840265345214578708').send(embeds.cryptoSignalEmbed);
            client.channels.get('850086242926198794').send(embeds.stockSignalEmbed);
        })
        console.log('node-schdedue job executed for Synergy integration');
    });
}