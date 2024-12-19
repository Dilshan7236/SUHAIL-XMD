const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94742876482";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94742876482";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94742876482";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94742876482";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94742876482,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_57_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAzMixcbiAgICAgICAgMjM4LFxuICAgICAgICA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU1LFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDU5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiem5pWXVhQ1VuT0NiRlNFcEtsb1RCSndiUDBUcDZMbFdodWJ4UTMxaU5SRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0Mjg3NjQ4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTM4OUM4Mjk3RDhGQUY5NkQ1QTU4QjFBQzZCOTE2RTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0NjM0NjY3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZvTmhpaUV1UUxlWGM0WFFsZ1ZhR0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDE0OWI5ZjgtYWEwYS00Y2YyLTljNWMtN2YxZDJjM2E3ZTY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDM5LFxuICAgICAgMjEsXG4gICAgICAxMjUsXG4gICAgICAxMjYsXG4gICAgICA5NixcbiAgICAgIDYwLFxuICAgICAgMjUyLFxuICAgICAgMjQxLFxuICAgICAgMjQ4LFxuICAgICAgNCxcbiAgICAgIDI0MyxcbiAgICAgIDMxLFxuICAgICAgNTQsXG4gICAgICAzNyxcbiAgICAgIDY1LFxuICAgICAgMjMzLFxuICAgICAgMzMsXG4gICAgICA4NCxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICAxMjUsXG4gICAgICA2MixcbiAgICAgIDIzMSxcbiAgICAgIDUzLFxuICAgICAgMTI5LFxuICAgICAgOTgsXG4gICAgICAyMzEsXG4gICAgICA0OSxcbiAgICAgIDE2NSxcbiAgICAgIDY2LFxuICAgICAgMjM3LFxuICAgICAgMSxcbiAgICAgIDIxNyxcbiAgICAgIDExNyxcbiAgICAgIDEyNixcbiAgICAgIDI5LFxuICAgICAgOTAsXG4gICAgICAyMTIsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNCRkhZM1BDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0Mjg3NjQ4MjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMwNzM4OTMwNzU3ODM1OjIyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkRpbGEgQm95XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2ZHK1lNQ0VLUFprYnNHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJycGV0S0JIci9meHNKUmVYdnRkR3lKQmlNUytXZzdudzltTjZDS2laOXkwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhLWU5Ia2pXdFFHemVuQnNiQjV2RnlBRmFCWmR5NWN1eUgvU1d6WnJEb2pTdDMyUkR5S29wTm1KTUVQWU5XVWYyMEI3ejVmdHpEaWY3TkcwaTREbUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZPRkI5TGJMVzRJdWxnZ3ovaG5FbGhjei9EczZzU3RXdjZMbDJPVEVuOUNyOW95bkJCa3Nqamd2c0Y4VXgwQ3R4V0VIdEhxNEdhcUVWVXdBQW9tYkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQyODc2NDgyOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NjM0NjYzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVZ4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFVnguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2UjI5RDRuYkpVVXA2ZVBtWmFvbUg3azVzMWZJY2hxRkU5NmduTmhsVDJvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU0NTE1MzgzMSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
