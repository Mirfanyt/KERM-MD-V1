/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "bdQSBbLR#d2N8QB6yh1ynv6eFm6uLe2v5zZ2AX2Ym-Yq6Q0ALkWE",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yw2ty2.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "_Hi 💁🏽 How Can I Assist You. Am alive Now._",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",  
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
FAKE_TYPING: process.env.FAKE_TYPING || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『𝗞𝗘𝗥𝗠 𝗠𝗗 𝗩1』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
