//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Montreal, Canads";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Montreal";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "525569354950";
global.owner = process.env.OWNER_NUMBER || "525569354950";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhDaUE3V1NBbnh1a3haUlkvNmpJdlZjWkFDMzJtclpaWmRHd0Z4ajZsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHo5clZSK2FzZEdQTnkzVUR6VUpJKzhPUmVpNzE5Y293Z1R0QU5MSWIyaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRXNabVVtMXlxZUVRbnMrRFFrc3pqS2JUb01Tc3R1Z29XUEI1QmpnbkdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZkgyaFRsZEpDQ0MvMjliMjJ5ZFBlMHdtMXgzU0JQelIwU1FTcjM1WEZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNNbHB2amF3UEhEVjF5TTZ5NkIvVkxmMWxEVzVkRWIrc1NXM0p5ZUsrMEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVaVHJEZnBiUnhna2dneHYyd3gzR0t4anJHR1hLUnpvUlFENit3T1IxMk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0J0T05VN05oVldNemttSXBOdk9rVFp4VmZ2NGNFbTFybGYxR05vUXJHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHZON245UExidTlQRDdZR1ZRY0NTcXNpYk85WURheDJaN3MydzJ6UXlRdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImoxU0xYQ1VtYmdGclJQblJUMU94MktCdWJ3cUt0WEdQOXp6U0lUdHB1NTI1RDhnaFBFZkloVmVia3dOWk00VjNaRngxaUNPRmtEeWF0VkNaTFBVOGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJQWVlKWFVFMlpXOFNic2pSQ0w1MXB0eklCc0FIMUlxdjJ0emdwVG5lSnJjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhYmx6X0VlWFE1Q3VCWkUtWjV2M1BBIiwicGhvbmVJZCI6IjFkYzM1MjUzLTMzMDEtNDk0MS1hMjA1LWY1OTg3ZWQ0NzFlMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3eWFUOXZFMWVzNXNjZzcvdnBNZmdKSk5DK3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNrUTFCenF1SEh4TTZsVW4wMStJci85OHk4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZQRzJYSzkzIiwibWUiOnsiaWQiOiI1MjE1NTY5MzU0OTUwOjQ3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMTys0ZG9FRUlmR3M3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDUmI1ZGdVQURGSHdocHBCaEs0YU4zMzVFQUxLUWt4K0lidVBUVDVuRXhvPSIsImFjY291bnRTaWduYXR1cmUiOiIxR0s5NWI5Y2x4RUVCTHFycmZYUDM1RmpKTGRlQ2VkY1FRUENpTjlsZDlTM2Y2UXZjemNlUVAwYlFqVHZFQmx4UnZJb1ZNRVBSWGFmaUtFbVBGYy9CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRGpudXJDNzl6K2tReFFabnlqdlFZT3pqZkJzdlJDc0dxSk1XUkxiZjRtdUttcWFSSzJrSlFQRktWV2RWeFBoYXBSK2pzMC9zYXBJa1RhMjR3Sk1ZaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MjE1NTY5MzU0OTUwOjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFrVytYWUZBQXhSOElhYVFZU3VHamQ5K1JBQ3lrSk1maUc3ajAwK1p4TWEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY4MDA2NjF9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || " ",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜GROOVY⌝☜`",
  author: process.env.PACK_AUTHER || "GROOVY MD",
  packname: process.env.PACK_NAME || "✮͢≛❂𝔾ℝ𝕆𝕆𝕍𝕐•𓃵❂•✮⃝",
  botname: process.env.BOT_NAME || "✮͢≛❂𝔾ℝ𝕆𝕆𝕍𝕐•𓃵❂•✮⃝",
  ownername: process.env.OWNER_NAME || "✮͢≛❂𝔾ℝ𝕆𝕆𝕍𝕐•𓃵❂•✮⃝",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
