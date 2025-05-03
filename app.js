import {Client, GatewayIntentBits} from 'discord.js';
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API, TOKEN } = process.env;

const client = new Client({
    intents: [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent]
});

async function getJoke() {
    try {
        const jsonData = await axios.get(API);

        // This Statement varies with the data returned by API. So, Kindly Check the data.
        return jsonData.data.jokes[0].setup + "\n" + jsonData.data.jokes[0].delivery;
    } catch (error) {
        return "Something went wrong please try again!";
    }
}

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase().includes('joke')) {
        try {
            await message.reply({
                content: await getJoke()
            });
        } catch (error) {
            await message.reply("Sorry, something went wrong while trying to tell a joke!");
        }
    }
});

client.login(TOKEN);
