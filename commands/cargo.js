const { Client } = require("discord.js");

module.exports = {
    name: 'cargo',
    description: 'Give a role to an user by reaction',
    execute (client,message, args) {
        function getRoleFromMention(mention) {
            if (!mention)
                console.log('No role was passed');
        
            if (mention.startsWith('<@&') && mention.endsWith('>')) {
                mention = mention.slice(3, -1);
        
                console.log('\x1b[34m%s\x1b[0m', mention)
                return message.guild.roles.cache.get(mention);
            }
        }
        const messageId = args.slice(0, 1);
        const roleEmoji = args.slice(1, 2);
        const roleMention = args.slice(2, 3);
        //const roleGive = getRoleFromMention(`${roleMention}`);
        console.log('\x1b[35m%s\x1b[0m', 'messageId:', messageId, 'roleEmoji:', roleEmoji, 'roleMention', roleMention); // show each argument
        console.log(message.author.username, ':' ,message.content); // show message and the author
        console.log(getRoleFromMention(`${roleMention}`))
        message.channel.messages.fetch(`${messageId}`).then(msg => msg.react(`${roleEmoji}`));
        //GuildMemberRoleManager.member.add(`${roleGive}`)
    }
}