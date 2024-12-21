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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_11_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM2LFxuICAgICAgICA0NixcbiAgICAgICAgMjQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5LFxuICAgICAgICA5NSxcbiAgICAgICAgODksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc3LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1LFxuICAgICAgICA0LFxuICAgICAgICA1OSxcbiAgICAgICAgNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICA5NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkxLFxuICAgICAgICA2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyLFxuICAgICAgICA5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQzLFxuICAgICAgICA5MixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieXRxLzlHSENXdnZnNjJselljTCsraUJHRmpDVnk5ZUdOTkczL0V5Nk1lbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0Mjg3NjQ4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzg2OTFFNzBDREJCMzNFRDQ2RjY3NzdBMEZFRUMwNjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0Nzk3NTE4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhDbWZ3NTM1U2JDaUJiSTZ1dzgtbXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWM5MTMwZWUtN2Y0OC00YWNhLWFkZDAtNThjYTY3NDBjNGM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMTEzLFxuICAgICAgMTk5LFxuICAgICAgMTQyLFxuICAgICAgOTMsXG4gICAgICA5NSxcbiAgICAgIDIzNSxcbiAgICAgIDExMixcbiAgICAgIDIzNixcbiAgICAgIDEyMSxcbiAgICAgIDEyMCxcbiAgICAgIDIxOCxcbiAgICAgIDYyLFxuICAgICAgNTksXG4gICAgICAzOSxcbiAgICAgIDMxLFxuICAgICAgNyxcbiAgICAgIDY1LFxuICAgICAgMTc5LFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDQ1LFxuICAgICAgMTg1LFxuICAgICAgMjEzLFxuICAgICAgMjE0LFxuICAgICAgMjQ4LFxuICAgICAgMjMxLFxuICAgICAgODMsXG4gICAgICAxMjEsXG4gICAgICAyMTQsXG4gICAgICAxODAsXG4gICAgICAyMTgsXG4gICAgICAyNDYsXG4gICAgICAxOTcsXG4gICAgICAxNDMsXG4gICAgICA1MCxcbiAgICAgIDE3MCxcbiAgICAgIDIxNyxcbiAgICAgIDE0MixcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpBNEMxSFBCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0Mjg3NjQ4MjoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMwNzM4OTMwNzU3ODM1OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmRytZTUNFTUxSbTdzR0dBOGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicnBldEtCSHIvZnhzSlJlWHZ0ZEd5SkJpTVMrV2c3bnc5bU42Q0tpWjl5MD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMTkk3V1d6VDBpa0t3aTBHUWZtSElMV1A1TDl4dERiT2w4YXVjWXZHK3FnL011ei91OXVRclRlMmcxVzZxYlVpb1BBa0ZIK1BBcEJjY3JUVFdNKzdDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLeFZrcHc2WERWQjhtYzd2SlFrbnFBU21vR2JvbmtPQTFJTXBTc2dRK1V4OHB6U1lZVU1VYzg0ZTREeDd3TU9TZjJUQUpQLzdFeWl6cmkrSjJZeUNBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0Mjg3NjQ4MjoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDc5NzUxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVWOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVY5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWHpDNy9rL3NZV3Fpa3gzUDVRSGtuQTZwbUZxTHdpcGFPR2xIVlNvK2I5ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NDUxNTM4MzEsXCJjdXJyZW50SW5kZXhcIjoxNCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ2NTY4MTQ5ODBcIn0iCn0="  // PUT your SESSION_ID 


module.export

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
