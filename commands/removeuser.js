// /removeuser — NEED_REPLY: true. User replies with Telegram numeric ID.
if (String(user.telegramid) !== "8312390543") { Bot.sendMessage("⛔ Owner only."); return; }
if (!message) { Bot.sendMessage("যার অনুমতি বাতিল করবে তার Telegram ID পাঠাও।"); return; }
var id = String(message).trim();
if (!/^\d{5,15}$/.test(id)) { Bot.sendMessage("ভুল Telegram ID।"); return; }
if (id === "8312390543") { Bot.sendMessage("Owner access বাতিল করা যাবে না।"); return; }
var a = Bot.getProperty("ffg_allowed_users", ["8312390543"]);
if (!Array.isArray(a)) a = ["8312390543"];
a = a.filter(function(x){ return String(x) !== id; });
Bot.setProperty("ffg_allowed_users", a, "json");
Bot.sendMessage("✅ অনুমতি বাতিল করা হয়েছে: " + id, {is_reply:true});
