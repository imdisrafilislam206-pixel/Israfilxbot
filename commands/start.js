/*CMD
  command: /start
  help: Start Guild Glory
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/

var OWNER = "8312390543";
var uid = String(user.telegramid);
var users = Bot.getProperty("ffg_all_users", []);
if (!Array.isArray(users)) users = [];
if (users.indexOf(uid) < 0) {
  users.push(uid);
  Bot.setProperty("ffg_all_users", users, "json");
}
var profile = {
  name: String(user.first_name || "Telegram User"),
  username: String(user.username || ""),
  id: uid,
  last_seen: new Date().toISOString()
};
Bot.setProperty("ffg_user_" + uid, profile, "json");

if (uid === OWNER) {
  var adminMenu = "👑 Admin Panel,🛍️ Products\n📦 Orders,👥 Users\n🔐 Permissions,📢 Group Post\n💬 Support Inbox,⚙️ Settings\n🌐 Telegram & WhatsApp,🏠 Home";
  Bot.sendKeyboard(adminMenu, "🌟 Guild Glory — OWNER\n\nস্বাগতম! আপনার Owner ID যাচাই হয়েছে। আপনার সব Owner permissions সক্রিয়।");
} else {
  var menu = "🛍️ Products,💎 Free Fire Top-up\n💰 Pricing,👤 My Account\n💬 Contact Support,🔐 Request Admin Access";
  Bot.sendKeyboard(menu, "🌟 Welcome to Guild Glory!\n\nস্বাগতম। প্রয়োজনীয় অপশন নিচের Reply Keyboard থেকে বেছে নিন।\n\nAdmin permission প্রয়োজন হলে Request Admin Access চাপুন।");
}
