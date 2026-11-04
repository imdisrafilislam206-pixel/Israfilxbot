/*CMD
  command: /admin
  aliases: ⚙️ Owner Control
  help: Root admin control panel
CMD*/
var ROOT_ADMIN_ID = "8312390543";
if (String(user.telegramid) !== ROOT_ADMIN_ID) {
  Bot.sendInlineKeyboard([{title:"⬅️ Back to Home",command:"/start"}],"⛔ এই প্যানেল শুধু Root Admin-এর জন্য।");
  return;
}
var buttons = [
 {title:"👥 User Control",command:"/adminusers"},
 {title:"🛍️ Product & Price",command:"/adminproducts"},
 {title:"💳 Payment Setup",command:"/adminpayments"},
 {title:"🎟️ Code Inventory",command:"/admincodes"},
 {title:"📋 Order Desk",command:"/adminorders"},
 {title:"📣 Broadcast",command:"/adminbroadcast"},
 {title:"🔧 Shop Design",command:"/admindesign"},
 {title:"⬅️ Back to Home",command:"/start"}
];
Bot.sendInlineKeyboard(buttons,"✦━━━━━━ OWNER CONTROL ━━━━━━✦\n🔐 Root Admin Verified\nAdmin ID: "+user.telegramid+"\n\nসব দোকান নিয়ন্ত্রণের বিভাগ বেছে নিন।");