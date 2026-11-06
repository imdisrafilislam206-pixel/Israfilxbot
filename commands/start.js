/*CMD
  command: /start
  help: Welcome message with Telegram profile details
  need_reply: false
CMD*/

var firstName = user.first_name || "নাম পাওয়া যায়নি";
var lastName = user.last_name || "";
var fullName = (firstName + " " + lastName).trim();
var username = user.username ? "@" + user.username : "নেই";

var welcome =
  "🌟 *Guild Glory-তে স্বাগতম!*\n\n" +
  "আপনাকে আমাদের বটে স্বাগতম। আপনার Telegram তথ্য নিচে দেওয়া হলো।\n\n" +
  "👤 *নাম:* " + fullName + "\n" +
  "🆔 *Telegram User ID:* " + user.telegramid + "\n" +
  "📛 *Username:* " + username + "\n\n" +
  "✅ আপনার অ্যাকাউন্ট বটের সঙ্গে সংযুক্ত হয়েছে।";

Bot.sendMessage(welcome);
