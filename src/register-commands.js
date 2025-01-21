const { REST, Routes, ApplicationCommandOptionType } = require('discord.js')
require('dotenv').config()

const commands = [
    {
        name: 'add',
        description: 'Adds two numbers.',
        options: [
            {
                name: 'first-number',
                description: 'The first Number',
                type: ApplicationCommandOptionType.Number,
                required: true
            },
            {
                name: 'second-number',
                description: 'The second Number',
                type: ApplicationCommandOptionType.Number,
                required: true
            }
        ]
    },
    {
        name: 'test',
        description: 'test command'
    },
    {
        name: 'play',
        description: 'add your link'
    }
]

const rest = new REST({version: '10'}).setToken(process.env.DISCORD_TOKEN)

async function createSlashCommands(){
    try {
        console.log('Registering slash commands...')

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID, 
                process.env.GUILD_ID
            ), 
            {   body: commands  }
        );

        console.log(`Slash commands were registered correctly`)
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}

createSlashCommands();


