/*CMD
  command: 🎧 Support Inbox
  help: Support Inbox
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ এই মেনু শুধু মালিকের জন্য।");
  return;
}
Bot.sendKeyboard("📥 Inbox, 🔙 Back, 🏠 Home", "🎧 Support Inbox\n\nগ্রাহকের ব্যক্তিগত মেসেজ ও অ্যাডমিন রিপ্লাই সংরক্ষণের ব্যবস্থা এখনো যুক্ত হয়নি।");
