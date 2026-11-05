/*CMD
  command: grouppost
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /grouppost — set NEED_REPLY: true. Owner-only broadcast to users who have opened the bot.
var OWNER = "8312390543";
if (String(user.telegramid) !== OWNER) { Bot.sendMessage("⛔ Owner only."); return; }
var post = String(message || "").trim();
if (!post) { Bot.sendMessage("পোস্টের লেখা পাওয়া যায়নি। আবার চেষ্টা করো।"); return; }
var users = Bot.getProperty("ffg_all_users", []);
if (!Array.isArray(users)) users = [];
// Bots.Business sends to private chats known to this bot; users must have started the bot.
Bot.sendMessageToAllPrivateChats("📢 *Guild Glory — Admin Announcement*\n\n" + post);
Bot.sendMessage("✅ Group Post পাঠানোর কাজ শুরু হয়েছে। যেসব ইউজার বটের সঙ্গে আগে চ্যাট শুরু করেছে, তাদের ব্যক্তিগত চ্যাটে পাঠানো হবে।");
