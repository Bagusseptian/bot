const { OWNER_ID } = require("../config.json")
module.exports = {
  name: "restart",
  aliases: ["res", "rest", "reset"],
  description: "Restart The Bot",
  
  execute: (client, message, args) => {
    const { OWNER_ID ,OWNER_ID2} = require("../config.json"); 

    if (message.author.id === OWNER_ID ,OWNER_ID2) {
        message.channel.send(`Ok Tuan ${message.author}, Restart Dimulai..`);
        message.channel.send(`Server Shutting Down...`);
        
        
        setTimeout(() => {
            process.exit(0);
        }, 5000);
      message.channel.send('**```Server UP Sepikan Kota Indoplay ```**' + ' @Everyone @Warga @Ladies');  
    } else {
        return message.channel.send("MEMBER GAK BISA RESTART BLOKK! (kecuali admin)");
    }
},
}