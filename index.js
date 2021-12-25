const { channel } = require("diagnostics_channel");
var Discord = require("discord.js");
var Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "*";

Client.on("ready", () => {
    console.log("BOT Opérationnel");
});


// Client.on("guildMemberAdd", member => {
//     console.log("Un nouveau membre est arrivé");
//     member.guild.channels.cache.find(channel => channel.id === "919639759712833559").send(member.displayName + " est arrivé !\nNous sommes désormais **" + member.guild.memberCount + "** sur le serveur !!");
// });


Client.on("messageCreate", message => {
    if(message.author.bot) return;

    //!!!ping
    if(message.content === prefix + "ping"){
        message.reply("Pong !")
    }

    //!!!help
    else if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("GOLD")
            .setTitle("Liste des commandes")
            .setAuthor("_MaiTox_#8776")
            .setDescription("**Voici la liste des commandes de mon BOT:**")
            .addField("*help", "Affiche la liste des commandes")
            .addField("*ping", "Vous renvoie pong")
            .setTimestamp()
            .setFooter("BOT crée par _MaiTox_#8776");

        message.channel.send({ embeds: [embed]});
    }

});

Client.login("OTI0MTQwMzQ3NDI3MjcwNjk2.YcaOxA.HY9peyiXxyo2a-I4E3jDU5Y0bKQ");