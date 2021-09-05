require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const { DISCORD_BOT_TOKEN, CHANNEL_NAME } = process.env;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("voiceStateUpdate", async (oldState, newState) => {
  if (oldState.channel !== newState.channel) {
    // User leaving channel
    if (oldState.channel && oldState.channel.name === CHANNEL_NAME) {
      const file = "./sounds/disconected.mp3";
      play(oldState.channel, file);
    }

    // User entering channel
    if (newState.channel && newState.channel.name === CHANNEL_NAME) {
      const file = "./sounds/connected.mp3";
      setTimeout(() => {
        play(newState.channel, file);
      }, 1000);
    }
  }
});

client.login(DISCORD_BOT_TOKEN);

async function play(channel, file) {
  const connection = await channel.join();

  connection.play(file, { volume: 0.5 });
}
