/*CMD
  command: /start
  help: ISRAFILXSHOP welcome card-style profile
  need_reply: false
CMD*/

var firstName = user.first_name || "নাম পাওয়া যায়নি";
var lastName = user.last_name || "";
var fullName = (firstName + " " + lastName).trim();
var username = user.username ? "@" + user.username : "সেট করা নেই";

var welcome =
  "✨ *ISRAFILXSHOP* ✨\n" +
  "🌟 *প্রিমিয়াম স্বাগতম* 🌟\n" +
  "━━━━━━━━━━━━━━━━━━\n\n" +
  "👋 *আসসালামু আলাইকুম, " + fullName + "!*\n\n" +
  "আমাদের বটে আপনাকে স্বাগতম।\n\n" +
  "👤 নাম: " + fullName + "\n\n" +
  "🆔 User ID: " + user.telegramid + "\n\n" +
  "📛 Username: " + username + "\n\n" +
  "━━━━━━━━━━━━━━━━━━\n" +
  "💎 *আপনার বিশ্বস্ত ডিজিটাল শপ*\n\n" +
  "ISRAFILXSHOP-এর সঙ্গে থাকার জন্য ধন্যবাদ! ❤️";

Bot.sendMessage(welcome);
