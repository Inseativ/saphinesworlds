const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Çekiliş Komutları")
 .setTimestamp()
.setDescription("a!çekiliş-yap = Çekiliş yapmanızı sağlar.\n a!çekiliş-bitir = Yaptığınız çekiliş süresi dolmadan bitirir. \n a!çekiliş-düzenle = Başlattığınız çekilişte düzenlemeler yapmaya yarar. \n a!çekiliş-liste = Yaptığınız çekilişleri listeler. \n a!reroll = Çekiliş kazananı tekrar seçer.")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['çekiliş-yardım'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'çekiliş',
  category: 'yönetici',
  description: 'Yardım Menüsü.',
   usage:'a!çekiliş'
}