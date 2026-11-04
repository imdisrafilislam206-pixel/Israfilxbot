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
 {title:"🛍️ Product & Price",command:"/adminproducts"},
 {title:"💳 Payment Setup",command:"/adminpayments"},
 {title:"🎟️ Code Inventory",command:"/admincodes"},
 {title:"📣 Broadcast",command:"/adminbroadcast"},
 {title:"⬅️ Back to Home",command:"/start"}
];
Bot.sendInlineKeyboard(buttons,"✦━━━━━━ OWNER CONTROL ━━━━━━✦\n🔐 Root Admin Verified\nAdmin ID: "+user.telegramid+"\n\nসক্রিয় নিয়ন্ত্রণ: পণ্য/দাম, পেমেন্ট নম্বর, কোড স্টক ও Broadcast।");
