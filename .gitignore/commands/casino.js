const Discord = require('discord.js')

exports.run = (client, message, args) => {
     let Machine = [':gem:', ':dvd:', ':pound:', ':cd:', ':moneybag:', ':credit_card:', ':gear:']

     let slot1 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot2 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot3 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot4 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot5 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot6 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot7 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot8 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot9 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot10 = Machine[Math.floor(Math.random() * Machine.length)];

     
    

     
     
     
     
     
var result = 'You lose!' 
var resultx5 = 'You lose!' 
if(slot1 === slot2 && slot2 === slot3 && slot3 === slot1) {
     result = 'You have win!' 
} 
     
const ultimaEmbed = new Discord.RichEmbed()
    .setTitle('Ultima Casino')
    .setDescription(`${slot1} | ${slot2} | ${slot3} | ${slot4} | ${slot5} | ${slot6} | ${slot7} | ${slot8} | ${slot9} | ${slot10}`)
if(args[0] === 'ultima') return message.channel.send(ultimaEmbed)



if(args[0] === 'x5') {
   
   if(slot1 === slot2 && slot2 === slot3 && slot4 === slot5) {
        resultx5 = 'You win!'
   } 
     
       const secondEmbed = new Discord.RichEmbed() 
           .setTitle('Casino x5') 
           .setDescription(`${slot1} | ${slot2} | ${slot3} | ${slot4} | ${slot5}`) 
           .setFooter(resultx5)
      message.channel.send(secondEmbed)
  } else {
    const mainEmbed = new Discord.RichEmbed() 
        .setTitle('Casino')
        .setDescription(`${slot1} | ${slot2} | ${slot3}`)
        .setFooter(result)
    message.channel.send(mainEmbed)
       
 } 
    
} 
