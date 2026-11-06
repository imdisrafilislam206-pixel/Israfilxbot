/*CMD
  command: 💎 Diamond Top-up
  help: Show editable Diamond catalog
  need_reply: false
CMD*/

var text = "💎 *Diamond Top-up Catalog*\n━━━━━━━━━━━━━━━━━━\n";
var count = 0;
for (var i = 1; i <= 5; i++) {
  var name = AdminPanel.getFieldValue({ panel_name: "product_catalog", field_name: "p" + i + "_name" });
  var price = AdminPanel.getFieldValue({ panel_name: "product_catalog", field_name: "p" + i + "_price" });
  var enabled = AdminPanel.getFieldValue({ panel_name: "product_catalog", field_name: "p" + i + "_on" });
  if (enabled === true && name) {
    text += "\n💠 " + name + "\n💰 মূল্য: " + (price || "অ্যাডমিনের কাছে জানতে চান") + "\n";
    count++;
  }
}
if (!count) text += "\nএখনো কোনো পণ্য চালু করা হয়নি।";
text += "\n\n🛒 অর্ডার ও পেমেন্ট ব্যবস্থা সংযুক্ত হলে এখান থেকেই কেনা যাবে।";
Bot.sendKeyboard("🔙 Back, 🏠 Home", text);
