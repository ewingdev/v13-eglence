const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const talkedRecently = new Set();

module.exports = {
    description: 'éwing v13 Eğlence Botu | Atatürk Komutu',
    run: async (client, interaction) => {
      if (talkedRecently.has(interaction.user.id)) {
      const embed = new MessageEmbed()
      .setTitle("éwing v13 Eğlence Botu | Atatürk Komutu")
      .addField("HATA!", `\`${interaction.user.tag}\` Lütfen **1 saniye** bekle!`)
      .setThumbnail("https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png")
         const buton = new MessageButton().setLabel('éwing').setStyle('LINK').setURL('https://discord.gg/jtttWdfPas');
        const row = new MessageActionRow().addComponents(buton)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
interaction.reply({ embed: embed })
} else {
      
      const r = [
"https://www.kastamonu.edu.tr/images/dokumanlar/rektorlugebaglibirimler/ataturk-ilkeleri-ve-inkilap/mustafkemalataturk.jpg",
"https://cdnr.yenicaggazetesi.com.tr/resize/663x373//news/452636.jpg",
"https://i.pinimg.com/originals/17/60/3a/17603a1ae2dc5ca43f12edac6cb85de6.jpg",
"https://i2.milimaj.com/i/milliyet/75/750x0/60a213355542801b8892c2da.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12OiPOZw4OXZtObQ4XrNc_6Z4o3cgsf1DTg&usqp=CAU",
"https://cdn.dsmcdn.com/mnresize/400/-/ty2/product/media/images/20200415/21/1915698/68780409/1/1_org.jpg",
"https://productimages.hepsiburada.net/s/35/375/10488730353714.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NQYMVEGydiKjVq0zZCHPdme8eV4WLb4XTQ&usqp=CAU",
"https://www.cumhuriyet.com.tr/Archive/2021/11/7/1882703/kapak_111447.jpg",
"https://www.lavitasarim.com/wp-content/uploads/2020/01/makam-odasi-ataturk-tablosu-lavi-3.jpg"]

const ra = r[Math.floor(Math.random()* r.length)];
      
        const embed = new MessageEmbed()
        .setTitle('éwing v13 Eğlence Botu | Atatürk Komutu')
        .addField("ATATURK", "Ne mutlu Türküm diyene!")
        .setThumbnail(ra)
const buton = new MessageButton().setLabel('éwing').setStyle('LINK').setURL('https://discord.gg/jtttWdfPas');
const button = new MessageButton().setLabel('Ewing Bot').setStyle('LINK').setURL('https://discord.com/api/oauth2/authorize?client_id=927201360871587870&permissions=8&scope=bot')

        const row = new MessageActionRow().addComponents(buton).addComponents(button)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
   
return talkedRecently.add(interaction.user.id);
setTimeout(() => {
 return talkedRecently.delete(interaction.user.id);
}, 1000)// Bunu ellemeyin yoksa bot bozulur!
  
interaction.reply({ embeds:[embed] })}}};