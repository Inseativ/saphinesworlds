const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "775322538321903618"); 
  if (message.member.roles.has(role.id)) return message.channel.send("Zaten bu role sahipsin.")
  message.member.addRole(role);
  message.channel.send(`özelrol rolü verildi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolal'],
  permLevel: 0
};

exports.help = {
  name: 'özelrol',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'özelrol'
};