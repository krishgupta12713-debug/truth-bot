require('dotenv').config();

module.exports = {
    prefixes: process.env.PREFIXES ? process.env.PREFIXES.split(',') : ['!', '/'],
    nodes: [{
        host: process.env.LAVALINK_HOST || "lavalink.jirayu.net",
        password: process.env.LAVALINK_PASSWORD || "youshallnotpass",
        port: process.env.LAVALINK_PORT ? Number(process.env.LAVALINK_PORT) : 13592,
        secure: process.env.LAVALINK_SECURE === 'true',
        name: process.env.LAVALINK_NAME || "Main Node"
    }],
    spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID || '',
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET || ''
    },
    botToken: process.env.BOT_TOKEN || '',
    embedColor: process.env.EMBED_COLOR || "#0061ff"
};