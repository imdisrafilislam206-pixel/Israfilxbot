// /adminreplysend — set NEED_REPLY: true. Owner reply is delivered to the selected user.
var OWNER = "8312390543";
if (String(user.telegramid) !== OWNER) { Bot.sendMessage("⛔ Owner only."); return; }
var target = String(User.getProperty("ffg_reply_target") || "");
var body = String(message || "").trim();
if (!/^\d{5,15}$/.test(target) || !body) { Bot.sendMessage("Reply target বা message পাওয়া যায়নি।"); return; }
Bot.sendMessageToChatWithId(target, "💬 *Guild Glory Support থেকে উত্তর*\n\n" + body);
var thread = Bot.getProperty("ffg_support_" + target, []);
if (!Array.isArray(thread)) thread = [];
thread.push({from:"admin", text:body, at:new Date().toISOString()});
Bot.setProperty("ffg_support_" + target, thread, "json");
User.setProperty("ffg_reply_target", "", "string");
Bot.sendMessage("✅ উত্তর পাঠানো হয়েছে।");
