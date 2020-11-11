const Discord = require('discord.js');
const fs = require('fs');
exports.run = (client, message, args) => {
if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(client.ayarlar.renk)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('RabeL Uyarı', 'Ban Adlı Komutu Özel Mesajlarda Kullamazsın')
  return message.author.send(ozelmesajuyari); }
      if (!message.member.roles.find("name", "⛔・ban-yetkilisi")) {
        return message.channel.send(' **Bu Komutu Kullanmak için ** ⛔・ban-yetkilisi ** Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send('Lütfen sunucudan yasaklayacağınız kişiyi etiketleyin.').catch(console.error);
  if (!message.guild.member(user).bannable) return message.channel.send('🔒 **Belirttiğiniz Kişiyi Sunucudan Yasaklayamam Çünkü Sunucuda Benden Daha Üstün Bir Rolü Var.**');
  message.guild.member(user).ban();
  message.channel.send(" Başarıyla " + user + " adlı kullanıcı " + reason + " Sebebiyle Sunucudan Yasaklandı")
  user.send(`Merhaba, ** ${guild.name}** adlı sunucudan **${reason}** sebebi ile ** ${message.author.username}** Adlı Yetkili Tarafından Yasaklandın.`)
  message.channel.send('> RabeL Ban Sistemi').then(m => m.delete(1000))//burayı silebilirsiniz
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 0,
    kategori: "moderasyon",
};
exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',
 
};
