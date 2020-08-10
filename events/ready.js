const moment = require('moment')
module.exports = client => {
client.user.setPresence('Elaine :heart: ile')
  const statusList = [
    { msg: 'OYUN PROSU nu ', type: 'WATCHING' },
    { msg: 'Kodlara Devamke!! ❁', type: 'PLAYING' },
    { msg: 'Botum Şuanda  10 adet sunucuya eklendi'},
    { msg: 'Yapımcı By İlbey Discord | İlbey Pluginer#1956!! ❁', type: 'PLAYING' },
    {msg: 'Yeni Video Kanalda Kanal ❀  OYUN PROSU'}
  ]

  setInterval(async () => {
    const bot = Math.floor(Math.random() * statusList.length + 1) - 1
    await client.user.setActivity(statusList[bot].msg, {
      type: statusList[bot].type
    })
  }, 5000)
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı Botunuz Sorunsuz bir şekilde çalışıyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şuanda Aktif!`);
};
