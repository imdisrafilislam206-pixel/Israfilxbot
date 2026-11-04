/*CMD
  command: /support
  aliases: 📞 Contact Admin
  help: Send a private message to the shop admin
  answer: 💬 আপনার মেসেজটি লিখুন। এটি শুধু Admin দেখতে পাবেন।
  need_reply: true
CMD*/
var ADMIN_ID = "8312390543";
var text = String(message || "").trim();
if (!text) {
  Bot.sendMessage("⚠️ খালি মেসেজ পাঠানো যাবে না। আবার Contact Admin চাপুন।");
  return;
}
var username = user.username ? "@" + user.username : "নেই";
var fullName = [user.first_name, user.last_name].filter(Boolean).join(" ");
var report = "📩 নতুন প্রাইভেট সাপোর্ট মেসেজ\n\n👤 নাম: " + fullName +
  "\n🔖 Username: " + username +
  "\n🆔 Chat ID: " + user.telegramid +
  "\n\n💬 মেসেজ:\n" + text +
  "\n\n↩️ উত্তর দিতে লিখুন:\n/reply " + user.telegramid + " আপনার উত্তর";
Bot.sendMessageToChatWithId(ADMIN_ID, report);
Bot.sendMessage("✅ আপনার মেসেজ Admin-এর কাছে ব্যক্তিগতভাবে পাঠানো হয়েছে।");
