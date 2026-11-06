/*CMD
  command: 👑 Admin Panel
  help: Owner-only administration menu
  need_reply: false
CMD*/

if (String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ এই প্যানেলটি শুধু অ্যাডমিনের জন্য।");
  return;
}

Bot.sendKeyboard("🔙 Back, 🏠 Home",
  "👑 *ISRAFILXSHOP Admin Panel*\n\n" +
  "🔐 অ্যাডমিন অ্যাক্সেস যাচাই হয়েছে।\n" +
  "⚙️ প্রোডাক্ট, অর্ডার, পেমেন্ট ও সাপোর্ট সেটিংসের পূর্ণ নিয়ন্ত্রণ পরবর্তী ধাপে যুক্ত করা হবে।"
);
