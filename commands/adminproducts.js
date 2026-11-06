/*CMD
  command: adminproducts
  help: Owner product management
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases: 🛍️ প্রোডাক্ট ম্যানেজমেন্ট
  group:
CMD*/

if (String(user.telegramid) !== "8312390543" && Bot.getProperty("ffg_perm_" + String(user.telegramid) + "_products", false) !== true) {
  Bot.sendMessage("⛔ Products permission নেই।"); return;
}
var products = Bot.getProperty("ffg_products", []);
if (!Array.isArray(products)) products = [];
var msg = "🛠️ PRODUCT MANAGEMENT\nমোট পণ্য: " + products.length + "\n\n";
var buttons = [];
for (var i = 0; i < products.length && i < 30; i++) {
  var p = products[i] || {};
  msg += (i+1) + ". " + String(p.name || "Unnamed") + " | ৳" + String(p.price || 0) + " | " + (p.active === false ? "বন্ধ" : "চালু") + "\n";
  buttons.push([{title:"🔎 " + String(p.name || "Product").substring(0,30), command:"/productinfo " + String(p.id || i)}]);
}
buttons.unshift([{title:"➕ নতুন পণ্য যোগ করুন",command:"/productadd"}]);
buttons.push([{title:"🛍️ স্টোর দেখুন",command:"/store"},{title:"⬅️ Admin",command:"/admin"}]);
Bot.sendInlineKeyboard(buttons, msg);
