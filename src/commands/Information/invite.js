const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite LavaMusic",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("Facebook")
    .setStyle("LINK")
    .setURL("https://www.facebook.com/profile.php?id=100025155112441"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/J3stqfkhJC")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('RaM', 'https://cdn.discordapp.com/avatars/909777688171008020/723b71394e121de6882cd2ce40b371a6.webp?size=80')
            .setThumbnail('https://cdn.discordapp.com/avatars/909777688171008020/723b71394e121de6882cd2ce40b371a6.webp?size=80')
             .setColor('#303236')
            .addField('invite RaM', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           message.reply({embeds: [mainPage], components: [row]})
    }
				}