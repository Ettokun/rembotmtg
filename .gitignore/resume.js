const Discord = require('discord.js') 

exports.run = (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if(!fetched) return message.channel.send('There currently isn\'t any music playing in this guild !');
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you aren't in the same channel as the music bot.");
    if(!fetched.dispatcher.paused) return message.channel.send('This song is already resumed.') 
    if(fetched.dispatcher.paused) {
        fetched.dispatcher.resume()
        message.channel.send(`Successfully resumed ${fetched.queue[0].songTitle}`)
    } /*message.channel.send('This music ins\'t paused');*/
    
    let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!resume` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID:`, `\`${message.guild.id}\``)
        .addField(`Guild Name:`, `\`${message.guild.name}\``)
        .addField(`Channel:`, `\`${message.channel.name} (${message.channel.id})\``)
        .addField(`Full content:`, `\`${message.content}\``)
        .setThumbnail(message.author.avatarURL)


    bot.channels.get('503494406264061963').send({embed: embed2});
  }

exports.help = {name: 'resume', aliases: []} 