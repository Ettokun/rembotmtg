const Discord = require("discord.js");
const infos = require('./infos.json');

exports.run = async (client, message, args) => {
    let target = message.author;
    
    const embed = new Discord.RichEmbed()
        .setTitle(`Profile of ${target}`)
        .addField(`Name`, `${target.username}`)

    message.channel.send(embed);
}