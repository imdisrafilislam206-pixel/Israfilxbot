/*CMD
  command: allowuser
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /allowuser — NEED_REPLY: true. User replies with Telegram numeric ID.
if (String(user.telegramid) !== "8312390543") { Bot.sendMessage("⛔ Owner only."); return; }
if (!message) { Bot.sendMessage("যে Telegram ID-কে অনুমতি দেবে সেটি পাঠাও।"); return; }
var id = String(message).trim();
if (!/^\d{5,15}$/.test(id)) { Bot.sendMessage("ভুল Telegram ID। শুধু সংখ্যার ID পাঠাও।"); return; }
var a = Bot.getProperty("ffg_allowed_users", ["8312390543"]);
if (!Array.isArray(a)) a = ["8312390543"];
if (a.indexOf(id) < 0) a.push(id);
Bot.setProperty("ffg_allowed_users", a, "json");
Bot.sendMessage("✅ অনুমতি দেওয়া হয়েছে: " + id, {is_reply:true});
