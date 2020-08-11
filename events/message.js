const ayarlar = require('../ayarlar.json');
const db = require('megadb')
let server = new db.crearDB('server')
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
const yasakkelimeler = ["aq"];
if(yasakkelimeler.some(kelime => message.content.toLowerCase().includes(kelime)) ) {
message.delete()
message.reply("Yasaklı bir kelime kullandın!!!");
}
module.exports = {
  "tr": {
  "dil": ":x: Türkçe: Bir Dil Seç Diller select"
  },
  "en": {
  "dil": ":x: en: Please select a language"
  }
  }
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else {
      message.channel.send(` \`\`${command}\`\` adında bir komut bulunamadı! Komut listesine bakmak için: \`\`${ayarlar.prefix}yardım\`\` yazabilirsiniz.`)
    }
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
  var dil = 'tr'
    if(server.get(`dil_${message.guild.id}`) === true) {
        var dil = "en"
  }
    const lang = client[dil]
  if(server.has(`yasakK_${message.guild.id}`) === true) {
  if(server.get(`yasakK_${message.guild.id}`).includes(cmd.help.name)) return message.channel.send('Bu komut bu sunucuda **yasaklanmıştır!**') 
} 

};