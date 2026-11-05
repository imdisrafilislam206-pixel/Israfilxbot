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
var buttons = [
 [{title:"👥 Users & Permissions",command:"/adminusers"}],
 [{title:"➕ Allow User",command:"/allowuser"},{title:"➖ Remove User",command:"/removeuser"}],
 [{title:"📢 Group Post / Broadcast",command:"/grouppost"}],
 [{title:"💬 Support Inbox",command:"/supportinbox"}],
 [{title:"🧾 Set Order/Deposit Group",command:"/setordergroup"}],
 [{title:"🔐 FFGlory API Setup",command:"/apisetup"},{title:"📊 API Balance",command:"/account"}],
 [{title:"📈 My Groups",command:"/groups"},{title:"🎟️ Coupons",command:"/coupons"}],
 [{title:"📜 Transactions",command:"/transactions"},{title:"🧾 Activity Log",command:"/history"}],
 [{title:"🏠 Home",command:"/start"}]
];
Bot.sendInlineKeyboard(buttons, "👑 *OWNER DASHBOARD*\n\nBot users recorded: " + users.length + "\nApproved users: " + allowed.length + "\nApproved members (excluding owner): " + members + "\nOrder/Deposit group: " + orderGroup + "\n\nনোট: Telegram-এর total channel/group members নয়; বটকে Start করা ব্যবহারকারীর হিসাব।");
