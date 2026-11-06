/*CMD
  command: 🛍️ Product Manager
  help: Product Manager
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ এই মেনু শুধু মালিকের জন্য।");
  return;
}
Bot.sendKeyboard("➕ Add Product, ✏️ Edit Product\n🗑️ Delete Product, 📋 List Products\n🔙 Back, 🏠 Home", "🛍️ Product Manager\n\nপ্রোডাক্ট যোগ/এডিট/ডিলিটের পূর্ণ ডেটাবেস এখনো যুক্ত হয়নি।");
