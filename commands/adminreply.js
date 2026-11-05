// /adminreply <telegram_id> — owner-only. Reads command params, then prompts for reply.
var OWNER = "8312390543";
if (String(user.telegramid) !== OWNER) { Bot.sendMessage("⛔ Owner only."); return; }
var target = String(params || "").trim().split(/\s+/)[0];
if (!/^\d{5,15}$/.test(target)) { Bot.sendMessage("ইউজারের ID পাওয়া যায়নি। Support message-এর Reply বাটন থেকে আবার চাপো।"); return; }
User.setProperty("ffg_reply_target", target, "string");
Bot.sendMessage("ইউজার " + target + "-কে যে উত্তর পাঠাতে চাও, সেটি লিখে পাঠাও।");
