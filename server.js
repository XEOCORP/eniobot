var dbd = require("dbd.js")
var fs = require("fs")
var discord = require("discord.js")

const bot = new dbd.Bot({
token: "d",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "you",
  type: "WATCHING",
  time: 12
})
 
bot.status({
  text: "ngapa logo gw mirip bigetron",
  type: "WATCHING",
  time: 12
})

bot.status({
  text: "BIGETRON ROAR!",
  type: "WATCHING",
  time: 12
})

bot.leaveCommand({ 
  channel: "849891742718754856", 
  code: `Goodbye, $username, hope you had a good stay at $serverName`
  /*
          Code Breakdown
  $serverName - The name of the server the user left
  $username - The user who left the server
  */
})

bot.onMessage()

 // Variable
bot.variables({
 prefix: "`",
 warn: "0"
})

 //commands handler
var reader = fs.readdirSync("./commands/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
  
}


