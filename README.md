# Yui sounds

This Discord bot will play Yuigahama's sounds on connect and disconnect when a user enters or leaves a voice channel.
![Yui](./yui.png)

### Original project [https://alexvanderbist.com/2020/teamspeak-voice-notifications-for-discord/](https://alexvanderbist.com/2020/teamspeak-voice-notifications-for-discord/).

## Installation

Clone this repository and install it's dependencies using Yarn (or NPM):

```bash
git clone git@github.com:gamoridev/yui-discord.git
cd yui-sounds
yarn install
```

Create a new bot on https://discordapp.com/developers/applications and change generated TOKEN on .env files

Rename the `.env.example` file to `.env` and edit its contents to include your Discord bot token. Finally execute the `index.js` file:

```bash
node index.js
```
