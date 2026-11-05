/*CMD
  command: admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /admin — owner-only dashboard
var OWNER = "8312390543";
if (String(user.telegramid) !== OWNER) { Bot.sendMessage("⛔ Owner only."); return; }
var users = Bot.getProperty("ffg_all_users", []);
var allowed = Bot.getProperty("ffg_allowed_users", [OWNER]);
if (!Array.isArray(users)) users = [];
if (!Array.isArray(allowed)) allowed = [OWNER];
var members = 0;
for (var i=0; i<allowed.length; i++) if (String(allowed[i]) !== OWNER) members++;
var orderGroup = Bot.getProperty("ffg_order_group", "Not set");
var menu = "/adminusers, /allowuser, /removeuser,\n/grouppost, /supportinbox,\n/setordergroup, /apisetup, /account,\n/groups, /coupons,\n/transactions, /history,\n/start";
Bot.sendKeyboard(menu, "👑 OWNER DASHBOARD\n\nBot users recorded: " + users.length + "\nApproved users: " + allowed.length + "\nApproved members (excluding owner): " + members + "\nOrder/Deposit group: " + orderGroup + "\n\nনিচের Reply Keyboard থেকে কাজ বেছে নিন।");
