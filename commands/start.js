/*CMD
  command: /start
  aliases: ⬅️ Back to Home
  help: Open ISRAFILXSHOP
CMD*/
var name = user.first_name || "বন্ধু";
var balance = User.getProperty("balance") || 0;
var rank = User.getProperty("rank") || "Rookie";
var orders = User.getProperty("my_orders") || [];
var buttons = [
  {title:"🛡️ Guild Glory Credit",command:"/guild"},
  {title:"💎 Add Funds / Deposit",command:"/deposit"},
  {title:"👤 My Profile",command:"/profile"},
  {title:"📦 My Orders",command:"/myorders"},
  {title:"🛒 All Packages",command:"/packages"},
  {title:"🎧 Live Support",command:"/support"}
];
if (String(user.telegramid) === "8312390543") buttons.push({title:"⚙️ Owner Control",command:"/admin"});
var msg = "✦━━━━━━ ISRAFILX SHOP ━━━━━━✦\nস্বাগতম, " + name + " 👋\n\n💳 Wallet: ৳" + balance + "\n🏅 Rank: " + rank + "\n🧾 Orders: " + orders.length + "\n\nনিচের বাটন থেকে সার্ভিস বেছে নিন।\n✦━━━━━━━━━━━━━━━━━━━━━━✦";
Bot.sendInlineKeyboard(buttons,msg);