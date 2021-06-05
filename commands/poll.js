module.exports = {
  
  name: "poll",
  code: `$title[VOTE NOW!]
$addReactions[👍;👎;❔]
$description[$message] 
$footer[👍 Yes - 👎 Not - ❔ Maybe]
$color[f9b208]
$argsCheck[>1;**Use:** \`$getServerVar[prefix]poll <PollMessage>\`]
$onlyPerms[admin;❌ **You need Administrator Permissions!**]`
}
