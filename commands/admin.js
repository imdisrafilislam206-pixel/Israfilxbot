/*CMD
  command: 👑 Admin Panel
  help: Owner-only administration menu
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ এই প্যানেলটি শুধু অ্যাডমিনের জন্য।");
  return;
}

Bot.sendKeyboard("🛠️ Setup Admin Settings, 🔙 Back, 🏠 Home",
  "👑 *ISRAFILXSHOP Admin Panel*\n\n" +
  "🔐 অ্যাডমিন অ্যাক্সেস যাচাই হয়েছে।\n" +
  "🛠️ Setup Admin Settings চাপলে Bots.Business অ্যাপের Admin Panel-এ সম্পাদনাযোগ্য Shop Settings ও Product Catalog তৈরি হবে।\n\n" +
  "⚠️ পেমেন্ট, ব্যালেন্স, অর্ডার, স্টক কোড ও ব্রডকাস্টের পূর্ণ ব্যবস্থা এখনো সংযুক্ত নয়।"
);
