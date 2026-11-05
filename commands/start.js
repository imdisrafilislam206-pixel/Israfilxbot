/*CMD
  command: start
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/

// /start
var OWNER = "8312390543";
var uid = String(user.telegramid);

var all = Bot.getProperty("ffg_all_users", []);
if (!Array.isArray(all)) all = [];
if (all.indexOf(uid) < 0) {
  all.push(uid);
  Bot.setProperty("ffg_all_users", all, "json");
}

var allowed = Bot.getProperty("ffg_allowed_users", [OWNER]);
if (!Array.isArray(allowed)) allowed = [OWNER];

if (uid !== OWNER && allowed.indexOf(uid) < 0) {
  Bot.sendMessage("⛔ এই বটটি ব্যবহারের অনুমতি আপনার নেই। Owner-এর অনুমতি প্রয়োজন।");
  return;
}

var profile = Bot.getProperty("ffg_user_" + uid, {});
if (!profile || typeof profile !== "object") profile = {};
if (!profile.first_seen) profile.first_seen = new Date().toISOString();
profile.name = user.first_name || "";
profile.username = user.username || "";
profile.last_seen = new Date().toISOString();
Bot.setProperty("ffg_user_" + uid, profile, "json");

// Send a plain reply first so the user still gets a response
// even if the inline keyboard has a problem.
Bot.sendMessage("🌟 FFGlory Reseller Panel\n\nস্বাগতম, " + (user.first_name || "User") + "! নিচের বাটন থেকে সেবা নির্বাচন করুন।");

var buttons = [
  {title:"💳 My Account / Balance", command:"/account"},
  {title:"🚀 Launch Glory Group", command:"/launch"},
  {title:"📂 My Groups", command:"/groups"},
  {title:"🎟️ Coupons", command:"/coupons"},
  {title:"📜 Transactions", command:"/transactions"},
  {title:"📈 History & Activity", command:"/history"},
  {title:"🔔 Notifications", command:"/notifications"},
  {title:"💬 Contact Admin", command:"/contactadmin"}
];
if (uid === OWNER) {
  buttons.push({title:"👑 Owner Admin Panel", command:"/admin"});
}
Bot.sendInlineKeyboard(buttons, "মেনু থেকে একটি অপশন নির্বাচন করুন।");
