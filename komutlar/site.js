const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`RabeL`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setDescription("Birbirinden iyi Kaliteli Kodların Paylaşıldığı RabeL Code Web Sitesine Gitmek için [TIKLA](https://webrabelcode.tk)")
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['site'],
    permLevel: 0
  };

  exports.help = {
    name: 'site',
    description: 'site',
    usage: 'site'
  };
