/*CMD
  command: adminreply
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /adminreply <telegram_id> — set NEED_REPLY: true; answer prompt asks owner to type the reply.
var OWNER = "8312390543";
if (String(user.telegramid) !== OWNER) { Bot.sendMessage("⛔ Owner only."); return; }
var target = String(params || "").trim().split(/\s+/)[0];
var body = String(message || "").trim();
if (!/^\d{5,15}$/.test(target) || !body) {
  Bot.sendMessage("ইউজারের ID বা উত্তর পাওয়া যায়নি। Support message-এর Reply বাটন থেকে আবার চেষ্টা করো।");
  return;
}
Bot.sendMessageToChatWithId(target, "💬 *Guild Glory Support থেকে উত্তর*\n\n" + body);
var thread = Bot.getProperty("ffg_support_" + target, []);
if (!Array.isArray(thread)) thread = [];
thread.push({from:"admin", text:body, at:new Date().toISOString()});
Bot.setProperty("ffg_support_" + target, thread, "json");
Bot.sendMessage("✅ উত্তর পাঠানো হয়েছে।");
