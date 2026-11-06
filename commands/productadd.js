/*CMD
  command: productadd
  help: Add product
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/

if (String(user.telegramid) !== "8312390543" && Bot.getProperty("ffg_perm_" + String(user.telegramid) + "_products", false) !== true) { Bot.sendMessage("⛔ Products permission নেই।"); return; }
var parts = String(message || "").split("|");
if (parts.length < 3) {
  Bot.sendInlineKeyboard([[{title:"⬅️ Product Management",command:"/adminproducts"}]], "পণ্যের তথ্য এইভাবে পাঠান:\nনাম | দাম | বিবরণ\nউদাহরণ: 100 Diamonds | 100 | Free Fire Diamond Top-up");
  return;
}
var name = String(parts[0]).trim(), price = Number(String(parts[1]).trim()), description = parts.slice(2).join("|").trim();
if (!name || !isFinite(price) || price < 0) { Bot.sendMessage("নাম বা দাম সঠিক নয়। আবার /productadd চাপুন।"); return; }
var products = Bot.getProperty("ffg_products", []);
if (!Array.isArray(products)) products = [];
var next = 1;
for (var i=0;i<products.length;i++) { var n=Number(products[i].id); if (isFinite(n) && n>=next) next=n+1; }
products.push({id:String(next),name:name,price:price,description:description,active:true,created_at:new Date().toISOString()});
Bot.setProperty("ffg_products", products, "json");
Bot.sendInlineKeyboard([[{title:"🛠️ Product Management",command:"/adminproducts"},{title:"🏠 Home",command:"/start"}]], "✅ পণ্য যোগ হয়েছে: " + name + " — ৳" + price + "\nনোট: পণ্যটি ক্যাটালগে দেখা যাবে; স্বয়ংক্রিয় পেমেন্ট/ডেলিভারি এখনো সক্রিয় নয়।");
