const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const talkedRecently = new Set();

module.exports = {
    description: 'éwing v13 Eğlence Botu | Kedi Komutu',
    run: async (client, interaction) => {
if (talkedRecently.has(interaction.user.id)) {
      const embed = new MessageEmbed()
      .setTitle("éwing v13 Eğlence Botu | Kedi Komutu")
      .addField("HATA!", `\`${interaction.user.tag}\` Lütfen **1 saniye** bekle!`)
      .setThumbnail("https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png")
const buton = new MessageButton().setLabel('éwing').setStyle('LINK').setURL('https://discord.gg/jtttWdfPas');
const button = new MessageButton().setLabel('Ewing Bot').setStyle('LINK').setURL('https://discord.com/api/oauth2/authorize?client_id=927201360871587870&permissions=8&scope=bot')

        const row = new MessageActionRow().addComponents(buton).addComponents(button)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
interaction.reply({ embed: embed })
} else {
  
    
      const r = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDrxwMJiieo3z8qpYOfqzKwLOxabtZlw5Gg&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmytHSzsp43eLaAf_RdpDnjFAeJsPeBGmvw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNWLk32vDS91G9U5o6MKgN1EhS3LWQ0Hhug&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJEgcklFW1Wl2MS8V3PcsD567pfU5PLh_XMA&usqp=CAU"
]


const ra = r[Math.floor(Math.random()* r.length)];
      
        const embed = new MessageEmbed()
        .setTitle('éwing v13 Eğlence Botu | Kedi Komutu')
        .addField("KEDI", "Miyavv!")
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