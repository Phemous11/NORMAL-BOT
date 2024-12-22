const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nVOXIXrZqqRbwheADxxmydhwgRIxAwBBCn/O9bjDM187Dn7OxbKpBOp7u/fgUkwwUyUQOGryCnuIIMtUvW5AgMwag8HhEFXRBCBsEQLMeH3EvtbcINzG0PXhTNofU516/9jEy5vlLj1XhZoWtFimdw74K8PCQ4+AOg0lsJEaIv9tpS6iBUO+ZhsWGNWxHEwUXGohcVyaxqDBI9g3uLCDHFJJrkJ5QiChMTNQ7E9Hv0zaUz8mEQ+I6rK5XAAtkPL1csG4eUbJdysreabeJTJ53H36PfiDzC/Zu1rOzVJshvkbfc71WhnuS7Sl2lapbTnidNieaqD/oFjggKjRARhlnzbd1tczvI68Tzxka+msmBgUyV4lnnpCXJnriDqEz2drQajbnJ94h7suJa0zIpfO3sn+PYHVS5ECTIrgZmg3eZrm52qINZpnFfiTv0Iyvx/9FdG/P7FfIkOHad8uYoZyabWWbZLzWnWkUupK5sq/6MRnzwPfrONrhpg1Vz4aXqcIl0dLSrE9HKsm8voksylvc/zRf+kJea9EkfspL+ieWa7i/WfDlHE+mE402gyOSibxVxwfPrW79y3FOvjOOdP62kwaapXY8ivxeJB2pal4V/xJ001tl4Pa2k+noMlpniHn6e6+e3F8WoMUIw5O9dQFGEC0Yhwxlp9wRu0AUwrDwUUMTe5AV5uhdjx1JSL65Xu+hwnJuLotC9aVKzTliIuZTsqmSxCuvNM+iCnGYBKgoUznHBMtosUVHACBVg+PevLiDoyh7GtdeJfBccMS3YhpR5ksHww9WPjzAIspIwryGB3i4QBUPucxsxhklUtDqWBNLghCuknyArwPAIkwLduyBEFQ5QiwemwlPoPJG5Wzd7W4vJoo+tS9RSPmXk8YvKheIRCfwTQgJ8kkIIn+CBl55kvi/0eZmXDrICugC/z0x75rcWrjoBf6yUq7fxGvJCZNGAFvW1TWI+5uKhPaIoBENGS9QFBxjEZb7OYkT+1HsDfix2fEOLltbJCKtbvkrO8fVayfUX3IenYPj62VN6FrZ4s7HkjjzNA12QvkUQty8XRFEW+8JgwKvcUP2r+FG3OsI8/0EQa2HfNW8PhIhBnBRgCHTnvFWNwpos8JTQYjbTJpGmRxr49Ogj7I8wxYXDdwrDtdKRcwt6WNqiqcMa0UXxeLlWqv3tlm1s57xLjOd/AQFD8DPtiXptiJUsnqECd8lo2cibnqkR01KUxQj5XliLM128WdY6UmrHPy1ucbldDia0XHQq+apjbZEo5GJsQ24zw+maP7vP7W2PrHy9jC+80I9yHU1sNdHU8Y2fzebGOhasFPHqWR6F7lqGO33XKUU1PXReTGEaHe0s0ri6KI3OxpYTITkJPdOHq2Krp5PF4WMM32ogea9f/DYgr+/JOmL01mYEtg79hzdfM87du18g3uvxNzkavVjjwZHqE12O1qroSOV0f1r3A8bNc+026VBeVZXp+CzxuQfu919dkCeQHTOagiHAbzMDuiCBBdM+p3SNU1QwmOZgyPdFSRWVAcfd/wE8A0Ta2wcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Phemous",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

