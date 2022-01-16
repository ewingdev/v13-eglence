const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const talkedRecently = new Set();
module.exports = {
    description: 'éwing v13 Eğlence Botu | Yardım Menüsü',
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
      
        const embed = new MessageEmbed()
        .setTitle('éwing v13 Eğlence Botu | Yardım Menüsü', true)
        .addField("`/yardım`", "Yardım Menüsüne bakarsın.", true)
        .addField("`/kedi`", "Kedi Resimleri atar.", true)
        .addField("`/atatürk`", "Atatürk Resimleri atar.", true)
        .addField("`/token`", "Botun Tokenini atar.", true)
        .setThumbnail("https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png")
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
}
interaction.reply({ embeds:[embed] })}
} 