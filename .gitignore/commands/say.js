const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    if(message.author.id != '234234723314958339') return message.channel.send('Command deactivated temporary')
    
    var text = args.join(` `)
    
    if(message.author.id === '424906340167843850') return message.react('💔')
    if(!text) return message.channel.send('`Usage: r!say <text>`')

    message.delete()
    message.channel.send(text)

    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!say` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Output:`, `${text}`)
    .setThumbnail(message.author.avatarURL)

client.channels.get('503494406264061963').send({embed: embed2});
}
