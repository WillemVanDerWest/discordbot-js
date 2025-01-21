const { VoiceConnectionStatus, joinVoiceChannel } = require("@discordjs/voice");
const { 
  Client, 
  IntentsBitField, 
  InteractionCollector, 
  CommandInteraction, 
  Events, 
  GatewayIntentBits, 
  ConnectionService,
  VoiceChannel 
} = require("discord.js");

require('dotenv').config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildIntegrations,
    IntentsBitField.Flags.GuildVoiceStates,
  ],
});

client.on(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}!`)
})
 
client.on(Events.MessageCreate, message => {
  
    if (message.author.bot) {
      return
    }
    
    if (message.content){
      console.log(`message: ${message.content} | from ${message.author.username}`);
      message.reply(`Thank you for the message @${message.author.username} , your message : ${message.content}`)
    }
    
})

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()){
    return
  }

  if (interaction.commandName === 'add'){
    const firstNumber = interaction.options.getNumber('first-number',true);
    const secondNumber = interaction.options.getNumber('second-number',true);
    const sumOfNumber = firstNumber + secondNumber
    await interaction.reply(`${firstNumber} + ${secondNumber} = ${sumOfNumber}`)
  }

  if (interaction.commandName === 'play'){
    const findUserChannel = interaction.
    console.log(findUserChannel)
    const channel = interaction.channel
    const connection = joinVoiceChannel(
      {
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator
      })

      console.log(`channelId ${channel.id} ||| ${channel}`)

    connection.on(VoiceConnectionStatus.Ready, (oldState, newState) => { 
      console.log('Connection is in the Ready state!')
    })

    
  }
    console.log(`Command ${interaction.commandName}! was used by ${interaction.user.username}`)
})

client.login(process.env.DISCORD_TOKEN);