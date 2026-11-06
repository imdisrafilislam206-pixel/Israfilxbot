/*CMD
  command: /start
  help: ISRAFILXSHOP premium dashboard
  need_reply: false
CMD*/

var firstName = user.first_name || "নাম পাওয়া যায়নি";
var lastName = user.last_name || "";
var fullName = (firstName + " " + lastName).trim();
var username = user.username ? "@" + user.username : "সেট করা নেই";

var welcome =
  "✦ *ISRAFILXSHOP* ✦\n" +
  "👑 *PREMIUM DASHBOARD*\n" +
  "━━━━━━━━━━━━━━━━━━\n\n" +
  "🌙 আসসালামু আলাইকুম, *" + fullName + "*! 👋\n" +
  "💎 আমাদের প্রিমিয়াম ডিজিটাল শপে স্বাগতম।\n\n" +
  "👤 *আপনার প্রোফাইল*\n" +
  "• নাম: " + fullName + "\n" +
  "• User ID: " + user.telegramid + "\n" +
  "• Username: " + username + "\n\n" +
  "━━━━━━━━━━━━━━━━━━\n" +
  "💰 *অ্যাকাউন্ট ব্যালেন্স*\n" +
  "৳ 0.00\n\n" +
  "🛍️ *আমাদের সার্ভিস বেছে নিন*\n" +
  "💠 ISRAFILXSHOP — PREMIUM SERVICE";

var keyboard =
  "💎 Diamond Top-up, 🎮 Free Fire Items\n" +
  "📦 My Orders, 💰 Add Balance\n" +
  "🎁 Referral, 🎧 Support";

if (String(user.telegramid) === "8312390543") {
  keyboard += "\n👑 Admin Panel";
}

Bot.sendKeyboard(keyboard, welcome);
