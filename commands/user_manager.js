/*CMD
  command: 👥 User Manager
  help: User Manager
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ এই মেনু শুধু মালিকের জন্য।");
  return;
}
Bot.sendKeyboard("📋 User List, 🔙 Back, 🏠 Home", "👥 User Manager\n\nইউজার ডেটাবেস, ব্যালেন্স ও ব্লক/আনব্লক নিয়ন্ত্রণ এখনো যুক্ত হয়নি।");
