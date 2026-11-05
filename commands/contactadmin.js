/*CMD
  command: contactadmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /contactadmin — set NEED_REPLY: true. User message is forwarded privately to owner.
var OWNER = "8312390543";
var uid = String(user.telegramid);
var allowed = Bot.getProperty("ffg_allowed_users", [OWNER]);
if (!Array.isArray(allowed)) allowed = [OWNER];
if (uid !== OWNER && allowed.indexOf(uid) < 0) { Bot.sendMessage("⛔ Owner-এর অনুমতি ছাড়া যোগাযোগ করা যাবে না।"); return; }
var body = String(message || "").trim();
if (!body) { Bot.sendMessage("খালি মেসেজ পাঠানো যাবে না।"); return; }
var profile = Bot.getProperty("ffg_user_" + uid, {});
var name = (profile && profile.name) || user.first_name || "Unknown";
var uname = (profile && profile.username) ? "@" + profile.username : "নেই";
var thread = Bot.getProperty("ffg_support_" + uid, []);
if (!Array.isArray(thread)) thread = [];
thread.push({from:"user", text:body, at:new Date().toISOString()});
Bot.setProperty("ffg_support_" + uid, thread, "json");
Bot.sendInlineKeyboardToChatWithId(OWNER,
  [[{title:"↩️ Reply to user", command:"/adminreply " + uid}]],
  "💬 *নতুন Support Message*\n\nনাম: " + name + "\nUsername: " + uname + "\nTelegram ID: " + uid + "\n\nমেসেজ:\n" + body
);
Bot.sendMessage("✅ তোমার মেসেজ অ্যাডমিনের কাছে পাঠানো হয়েছে। উত্তর পেলে এই বটেই জানানো হবে।");
