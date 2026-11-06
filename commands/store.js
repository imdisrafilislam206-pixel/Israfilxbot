/*CMD
  command: store
  help: Guild Glory product catalogue
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases: 🛍️ স্টোর, প্রোডাক্ট
  group:
CMD*/

var products = Bot.getProperty("ffg_products", []);
if (!Array.isArray(products)) products = [];
var text = "🛍️ GUILD GLORY STORE\n\n";
var buttons = [];
if (!products.length) {
  text += "এখনো কোনো পণ্য যোগ করা হয়নি। Owner Admin Panel থেকে পণ্য যোগ করতে পারবেন।";
} else {
  for (var i = 0; i < products.length && i < 40; i++) {
    var p = products[i] || {};
    if (p.active === false) continue;
    text += (i + 1) + ". " + String(p.name || "Unnamed") + " — ৳" + String(p.price || "0") + "\n";
    buttons.push([{title:"🛒 " + String(p.name || "Product").substring(0,35), command:"/productinfo " + String(p.id || i)}]);
  }
}
buttons.push([{title:"💬 সাপোর্ট",command:"/contactadmin"},{title:"🏠 মূল মেনু",command:"/start"}]);
Bot.sendInlineKeyboard(buttons, text);
