/*CMD
  command: admin
  help: Owner dashboard
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/

var OWNER = "8312390543";
if (String(user.telegramid) !== OWNER) {
  Bot.sendMessage("⛔ এই Admin Panel শুধু Owner-এর জন্য।");
  return;
}
var users = Bot.getProperty("ffg_all_users", []);
if (!Array.isArray(users)) users = [];
var orderGroup = Bot.getProperty("ffg_order_group", "Not set");
var menu = "👥 Users,🔐 Permissions\n🛍️ Products,📦 Orders\n📢 Group Post,💬 Support Inbox\n⚙️ Settings,🌐 Contact Links\n🏠 Home";
Bot.sendKeyboard(menu, "👑 GUILD GLORY OWNER PANEL\n\nRegistered users: " + users.length + "\nOrder group: " + orderGroup + "\n\nআপনার Owner account-এ সব permissions চালু আছে। অন্য ইউজারদের permission আলাদাভাবে নির্ধারণ করুন।");
