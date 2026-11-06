/*CMD
 command: ➕ Set Button Emoji
 help: Choose emoji for new button
 answer: এখন বাটনের জন্য একটি ইমোজি পাঠান। না চাইলে - লিখুন।
 need_reply: true
CMD*/
if (!user || String(user.telegramid)!=="8312390543") return;
var emoji=String(message||"").trim();
if(emoji.length>12){Bot.sendMessage("⚠️ একটি ইমোজি দিন।");return;}
User.setProperty("draft_button_emoji",emoji==="-"?"":emoji,"string");
Bot.runCommand("➕ Set Button Action");
