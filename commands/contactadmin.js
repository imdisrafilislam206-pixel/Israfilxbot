/*CMD
  command: contactadmin
  help: Private customer support
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases: 💬 সাপোর্টে যোগাযোগ
  group:
CMD*/

// Customer support is open to every user who has started the bot.
// NEED_REPLY is enabled: the user's next message is treated as the support message.
var OWNER = "8312390543";
var uid = String(user.telegramid);
var body = String(message || "").trim();
if (!body) {
  Bot.sendInlineKeyboard([[{title:"🏠 মূল মেনু",command:"/start"}]], "মেসেজটি খালি। আবার সাপোর্টে যোগাযোগ করুন।");
  return;
}
var profile = Bot.getProperty("ffg_user_" + uid, {});
if (!profile || typeof profile !== "object") profile = {};
var name = String(profile.name || user.first_name || "Unknown");
var uname = profile.username ? "@" + profile.username : "নেই";
var thread = Bot.getProperty("ffg_support_" + uid, []);
if (!Array.isArray(thread)) thread = [];
thread.push({from:"user", text:body, at:new Date().toISOString()});
Bot.setProperty("ffg_support_" + uid, thread, "json");
Bot.sendInlineKeyboardToChatWithId(OWNER,
  [[{title:"↩️ উত্তর দিন", command:"/adminreply " + uid}]],
  "💬 নতুন Support Message\n\nনাম: " + name + "\nUsername: " + uname + "\nTelegram ID: " + uid + "\n\nমেসেজ:\n" + body
);
Bot.sendInlineKeyboard([[{title:"🏠 মূল মেনু",command:"/start"}]], "✅ আপনার মেসেজ Owner-এর কাছে পাঠানো হয়েছে। উত্তর এই বটেই পাবেন।");
