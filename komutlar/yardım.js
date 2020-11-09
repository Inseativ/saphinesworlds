const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`RabeL`, client.user.avatarURL)
      .setDescription("RabeL Bot")
      .setThumbnail(client.user.avatarURL)
      .addField(`Abone Rolü vermek için > r-a @etiket \n Web Sitemizi Ziyaret etmek için [TIKLA](https://web.rabelcode.tk)`,false)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
