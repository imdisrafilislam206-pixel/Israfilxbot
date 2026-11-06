/*CMD
  command: productinfo
  help: View product information
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/

var products = Bot.getProperty("ffg_products", []);
if (!Array.isArray(products)) products = [];
var id = String(params || "").trim();
var found = null;
for (var i = 0; i < products.length; i++) {
  if (String(products[i].id || i) === id && products[i].active !== false) { found = products[i]; break; }
}
if (!found) { Bot.sendInlineKeyboard([[{title:"⬅️ স্টোর",command:"/store"}]], "এই পণ্যটি পাওয়া যায়নি বা বর্তমানে বন্ধ।"); return; }
var desc = String(found.description || "বিস্তারিত দেওয়া হয়নি।");
Bot.sendInlineKeyboard([
  [{title:"💬 অর্ডার/সহায়তার জন্য যোগাযোগ",command:"/contactadmin"}],
  [{title:"⬅️ স্টোর",command:"/store"},{title:"🏠 মূল মেনু",command:"/start"}]
], "🛍️ " + String(found.name) + "\nমূল্য: ৳" + String(found.price) + "\n\n" + desc + "\n\nপেমেন্ট ও স্বয়ংক্রিয় ডেলিভারি চালু না হওয়া পর্যন্ত এই পেজ থেকে স্বয়ংক্রিয় অর্ডার নেওয়া হচ্ছে না।");
