const Discord = require('discord.js');
exports.run = async(client, message, args, ops) => {
    message.delete()//lütfen çalmayın zaman harcadım lord creative  
    if (!message.member.roles.find("name", "🏆・Destek Ekibi")) {
        return message.channel.send(' **Bu Komutu Kullanmak için ** 🏆・Destek Ekibi ** Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
    let toverify = message.guild.member(message.mentions.users.first());
    let verifyrole = message.guild.roles.find(`name`, "⭐️・Abone");//lütfen çalmayın zaman harcadım lord creative  
    if (!verifyrole) return message.reply("Rol Bulunamadı Lütfen 'Doğulandı' Adıyla Rol Oluşturunuz.");
    if (!toverify) return message.reply("Bir Kişiyi Et");
    await (toverify.addRole(verifyrole.id));
    let vUser = message.guild.member(message.mentions.users.first());
    let verifembed = new Discord.RichEmbed()
        .setTitle("<a:sguad:720578780422340628> Abone Rölü Verildi <a:sguad:720578780422340628>")//lütfen çalmayın zaman harcadım lord creative  
        .setColor('#00ff7f')
        .addField("Abone Rolü Veren Yetkili", `${message.author.tag}`, true)
        .addField("Abone Rolü Alan Kullanıcı", `${vUser}`, true)
        .setTimestamp();
    let veriflog = message.guild.channels.find(`name`, "📸・galeri");
      if (!veriflog) return message.channel.send("Doğrulama Kullanıcı Log Kanalı bulunamadı. Lütfen ':pushpin:╏abone-rol-log' Adlı Kanal Oluşturunuz.`");
    veriflog.send(verifembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['verify', 'Verify', 'Doğrula', 'doğrula', 'v','a'],
};
exports.help = {
  name: 'abone',//lütfen çalmayın zaman harcadım lord creative  
  description: 'Kullanıcı İçin Doğrulandı Rolünü Verir.',
  usage: 'abone'
}; 