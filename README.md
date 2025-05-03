# Humorist - A Discord Bot

A fun and interactive Discord bot that delivers jokes on demand! Built using Node.js and Discord.js, this bot fetches jokes from an API to keep your server entertained.

## Features

- 🎭 Fetch random jokes on demand
- 🤖 Simple command system (just mention "joke" in your message)
- ⚡ Fast response times
- 🛡️ Error handling for API issues

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- A Discord Bot Token
- A Joke API endpoint

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/Humorist---A-DiscordBot.git
cd Humorist---A-DiscordBot
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
TOKEN=your_discord_bot_token_here
API=your_joke_api_endpoint_here
```

4. Start the bot:
```bash
npm start
```

## Usage

The bot is very simple to use! Just type any message containing the word "joke" (case insensitive) in your Discord server, and the bot will respond with a random joke.

Example:
```
User: Tell me a joke!
Bot: [Joke setup]
[Joke delivery]
```

## Technical Details

The bot is built using:
- Discord.js for Discord API interaction
- Axios for making HTTP requests to the joke API
- dotenv for environment variable management

## Error Handling

The bot includes basic error handling for:
- API connection issues
- Invalid API responses
- Message sending failures

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have suggestions, please open an issue in the GitHub repository.
