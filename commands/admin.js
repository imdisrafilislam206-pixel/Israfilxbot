/*CMD
  command: 👑 Admin Panel
  help: Owner-only Telegram bot administration
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ এই প্যানেলটি শুধু মালিকের জন্য।");
  return;
}

Bot.sendKeyboard(
  "🧩 Button Manager, 🛍️ Product Manager\n" +
  "👥 User Manager, 📦 Order Manager\n" +
  "💰 Balance & Payments, 🎧 Support Inbox\n" +
  "📢 Broadcast, ⚙️ Shop Settings\n" +
  "🔙 Back, 🏠 Home",
  "👑 *ISRAFILXSHOP — OWNER CONTROL PANEL*\n\n" +
  "🔐 মালিক হিসেবে প্রবেশ সফল।\n" +
  "এখান থেকেই বটের মেনু, পণ্য, ইউজার, অর্ডার, ব্যালেন্স, সাপোর্ট ও ঘোষণা পরিচালিত হবে।"
);
