const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
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
            .addField('Creator', '[Min min#9999](https://www.facebook.com/profile.php?id=100025155112441)', true)
            .addField('Organization', '[Minmin](https://discord.gg/J3stqfkhJC)', true)
            .addField('Invite 10A4', '[Here](https://discord.gg/4ZQgdVYaqU)', true)
            .addField('\u200b',
                `RaM is made to serve music to everyone in discord, with rich, searchable music and commands.`
            )
        return message.reply({embeds: [mainPage], components: [row]});
    }
}