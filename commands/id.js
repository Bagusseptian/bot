const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "id",
  execute: async(client, message, args) => {
    
    let embed = new MessageEmbed()
    .setColor(`RANDOM`)
    .setDescription(`Your Discord  ID: ${message.author.id}`)
   
    .setFooter('© Created LarSpeed', client.user.displayAvatarURL)
    message.channel.send(embed)
    }
}