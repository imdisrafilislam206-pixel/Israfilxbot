/*CMD
  command: 📦 Order Manager
  help: Order Manager
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ এই মেনু শুধু মালিকের জন্য।");
  return;
}
Bot.sendKeyboard("📋 All Orders, 🔙 Back, 🏠 Home", "📦 Order Manager\n\nঅর্ডার সংরক্ষণ ও স্ট্যাটাস পরিবর্তনের ডেটাবেস এখনো যুক্ত হয়নি।");
