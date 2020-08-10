const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

client.on('message', message => {
if (message.content.toLowerCase() === prefix + 'ip') {
  message.member.send("```diff\n-SpecialTR | Play.SpecialTR.Com   \n-GamerTR | BAKIMDA !!!\n```")
}
})

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.on("message", msg => {
  var dm = client.users.cache.get("Kullanıcı İd'iniz"); 
  if (msg.author.id === client.user.id) return
  if (msg.channel.type === "dm") {
  const DMEmbed = new Discord.MessageEmbed()
  .setTitle('Bir Mesaj Geldi!')
  .setAuthor(msg.author.tag, msg.author.avatarURL({size: 1024}))
  .setDescription(`${msg.content}`)
  .setThumbnail(msg.author.avatarURL({size: 1024}))
  dm.send(DMEmbed)}
  if (msg.channel.bot) return});
  
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('guildBanAdd' , (guild, user) => {
  let aramızakatılanlar = guild.channels.cache.find('name', 'aramıza-katılanlar');
  if (!aramızakatılanlar) return;
  aramızakatılanlar.send('https://media.giphy.com/media/8njotXALXXNrW/giphy.gif **Adalet dağıtma zamanı gelmiş!** '+ user.username +'**Bakıyorum da suç işlemiş,Yargı dağıtmaya devam** :fist: :writing_hand:  :spy:' );
});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.on("guildCreate", guild => {
  let log = client.channels.cache.find(x => x.id === "732200541408460832")  ;
  const embed = new Discord.MessageEmbed()
    .setAuthor("Yeni bir sunucuya eklendim!")
    .setThumbnail(
      guild.iconURL ||
        "https://cdn.discordapp.com/attachments/663343412031782947/670657121423196201/mafya_gif.gif"
    )
    .setColor("GREEN")
         .addField("» Sunucu İsmi:", `**${guild.name}**`)
    .addField("» Sunucu ID:", `\`\`\`${guild.id}\`\`\``)
    .addField(
      "Sunucu Bilgisi:",
      `**Sunucu Sahibi: \`${guild.owner}\`\nSunucu Bölgesi: \`${guild.region}\`\nÜye Sayısı: \`${guild.members.cache.size}\`\nKanal Sayısı: \`${guild.channels.cache.size}\`**`
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL);
  log.send(embed);
});
client.on("guildDelete", guild => {
  let log = client.channels.cache.find(x => x.id === "732201238476619808")  ;
  const embed = new Discord.MessageEmbed()
    .setAuthor("Bir sunucudan atıldım -_-")
    .setThumbnail(
      guild.iconURL ||
        "https://cdn.discordapp.com/attachments/663343412031782947/670657121423196201/mafya_gif.gif"
    )
    .setColor("RED")
       .addField("» Sunucu İsmi:", `**${guild.name}**`)
    .addField("» Sunucu ID:", `\`\`\`${guild.id}\`\`\``)
    .addField(
      "Sunucu Bilgisi:",
      `**Sunucu Sahibi: \`${guild.owner}\`\nSunucu Bölgesi: \`${guild.region}\`\nÜye Sayısı: \`${guild.members.cache.size}\`\nKanal Sayısı: \`${guild.channels.cache.size}\`**`
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL);
  log.send(embed);
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
      msg.reply('<a:pikachu:715656791731601408> Aleyküm Selam Hoşgeldin <a:pikachu:715656791731601408> !');
}
if (msg.content.toLocaleLowerCase() === 'yes') {
  msg.delete()
   msg.channel.send('<a:yes:735061119168806922>')
}
if (msg.content.toLocaleLowerCase() === 'no') {
  msg.delete()
   msg.channel.send('<a:no:735061131558912071>')
}
if (msg.content.toLocaleLowerCase() === 'bilmem') {
  msg.delete()
   msg.channel.send('<a:bilmemki:735061104308256888>')
}
if (msg.content.toLocaleLowerCase() === 'heyy') {
  msg.delete()
   msg.channel.send('<a:stop:732616497217798155>')
}
if (msg.content.toLocaleLowerCase() === 'mavitik') {
  msg.delete()
   msg.channel.send('<a:mavitik:735458479375908866>')
   console.log('Beni Biri Kullandı Lan')
} 
if (msg.content.toLocaleLowerCase() === 'youtube')
msg.member.send('https://www.youtube.com/channel/UCW4zHmAirW4yAkwd_OZyzVA?view_as=subscriber Abone Olmayı Unutma Kral!')
if (msg.content.toLowerCase() === ':frowning:') {
  msg.delete()
    msg.channels.send('☹')  
}
if (msg.content.toLocaleLowerCase()=== 'guzzy') {
msg.channel.send('https://media.tenor.com/images/5b5fc640b1749b3bf8aa49c662f8ad72/tenor.gif')
}
if(msg.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
  msg.channel.send(`Merhaba, Beni mi etiketledin? 
  Prefixim: \`${prefix}\` `)
}
if (msg.content.toLowerCase() === 'roleplay') {
  msg.reply('<a:pikachu:715656791731601408>-Anne: Oğlum gel şu odanı topla. \n-Oğlu: Yaaa anne sonra toplarım. \n-dışses: Akşam olur ve hala odasını toplamadan yatar. \n-Anne: Oğlum yarın o odanı kalkı kalmaz toplıyacaksın !!! \n-Oğlu: Tamam anne :( \n-DışSes: Ve artık günlerini böyle geçirirler Mutlu Son  <a:pikachu:715656791731601408> !');
}
  if (msg.content.toLowerCase() === 'pikavcu') {
      msg.reply('<a:pikachu:715656791731601408>');
}
if (msg.content.toLocaleLowerCase() === 'emoji') {
  var embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`${client.emojis.cache.map(r => r).join("\n")}`)
  msg.channel.send(embed)
}
if (msg.content.toLowerCase() === 'hehe') {
  msg.reply('<:hehe:741704301466091621>');
}
if (msg.content.toLowerCase() === 'kapak laflar') {
  msg.reply('<a:pikachu:715656791731601408>\nhttps://www.youtube.com/watch?v=8Y46U6vLtl8\n<a:pikachu:715656791731601408>');
}
if (msg.content.toLowerCase() === 'tos') {
    msg.reply('<a:pikachu:715656791731601408> https://discord.com/terms Lütfen Burayı Oku Discord Kuralları <a:pikachu:715656791731601408>');
}
if (msg.content.toLowerCase() === 'yardımcılar') {
    msg.reply('<a:pikachu:715656791731601408> Bot Yapımında Yardımcı Olan Krallar  @B L A C K 🌸 | PARADOX 🌓#6767  @" Flo$er#1000  Seviliyorsunuz Krallar  ❤  <a:pikachu:715656791731601408>');
}
if (msg.content.toLowerCase() === 'yenilikler') {
  msg.reply("\n<a:pikachu:715656791731601408> \nAfk Eklendi | .afk sebep   \nKüfür Engel Eklendi Her Zaman Aktif \n<a:pikachu:715656791731601408>")
}
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
