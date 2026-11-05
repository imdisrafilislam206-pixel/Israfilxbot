/*CMD
  command: /start
  aliases: ⬅️ Back to Home
  help: Open ISRAFILXSHOP
CMD*/
var name = user.first_name || "বন্ধু";
var balance = User.getProperty("balance") || 0;
var rank = User.getProperty("rank") || "Rookie";
var orders = User.getProperty("my_orders") || [];
var menu = Bot.getProperty("home_menu_buttons");
if (!Array.isArray(menu) || !menu.length) {
 menu = [
  {title:"🛡️ Guild Glory Credit",command:"/guild"},
  {title:"💎 Add Funds / Deposit",command:"/deposit"},
  {title:"👤 My Profile",command:"/profile"},
  {title:"📦 My Orders",command:"/myorders"},
  {title:"🛒 All Packages",command:"/packages"},
  {title:"🎧 Live Support",command:"/support"}
 ];
}
var buttons=[];
for(var i=0;i<menu.length;i++){
 var b=menu[i]||{};
 if(b.enabled===false) continue;
 if(b.title && b.command) buttons.push({title:b.title,command:b.command});
}
if (String(user.telegramid) === "8312390543") buttons.push({title:"⚙️ Owner Control",command:"/admin"});
var msg = "✦━━━━━━ ISRAFILX SHOP ━━━━━━✦\nস্বাগতম, " + name + " 👋\n\n💳 Wallet: ৳" + balance + "\n🏅 Rank: " + rank + "\n🧾 Orders: " + orders.length + "\n\nসার্ভিস বেছে নিন।\n✦━━━━━━━━━━━━━━━━━━━━━━✦";
Bot.sendInlineKeyboard(buttons,msg);