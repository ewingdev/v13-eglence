const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const talkedRecently = new Set();

module.exports = {
    description: 'éwing v13 Eğlence Botu | Token Komutu',
    run: async (client, interaction) => {
      if (talkedRecently.has(interaction.user.id)) {
      const embed = new MessageEmbed()
      .setTitle("éwing v13 Eğlence Botu | Token Komutu")
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

function tokenOluştur(length) {
     var result           = '';
     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789-.';
     var charactersLength = characters.length;
     for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     return result;
}

console.error("_______________________________________TOKEN_______________________________________")
console.error("                              ╔═══════════════════════════════════╗                              ")
console.error("                              ║ KOMUTU KULLANAN UYE'NIN BILGILERI ║                              ")
console.error("                              ╚═══════════════════════════════════╝                              ")
console.log(interaction.user)
console.error("_______________________________________TOKEN_______________________________________")
  
        const embed = new MessageEmbed()
        .setTitle('éwing v13 Eğlence Botu | Token Komutu')
        .addField("TOKENIM", `OTI${tokenOluştur(61)}`)
        .setDescription("Bu gerçek tokenim inanmiyorsan dene hem bedava tokende heeee! Şşşşşşt kimseye verme he!")
        .setThumbnail("https://imgrosetta.mynet.com.tr/file/12528299/640xauto.jpg")
const buton = new MessageButton().setLabel('EWİNG').setStyle('LINK').setURL('https://ewing.ga/');
const button = new MessageButton().setLabel('Ewing Sunucu').setStyle('LINK').setURL('https://discord.gg/jtttWdfPas')

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