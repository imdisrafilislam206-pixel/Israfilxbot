/*CMD
  command: /start
  help: ISRAFILXSHOP premium welcome and user profile
  need_reply: false
CMD*/

var firstName = user.first_name || "নাম পাওয়া যায়নি";
var lastName = user.last_name || "";
var fullName = (firstName + " " + lastName).trim();
var username = user.username ? "@" + user.username : "সেট করা নেই";

var welcome =
  "╔══════════════════╗\n" +
  "       💠 *ISRAFILXSHOP* 💠\n" +
  "    👑✨ *PREMIUM WELCOME* ✨👑\n" +
  "╚══════════════════╝\n\n" +
  "🌙 আসসালামু আলাইকুম, *" + fullName + "*! 🥰\n\n" +
  "🎉 আমাদের ISRAFILXSHOP পরিবারে আপনাকে স্বাগতম!\n" +
  "━━━━━━━━━━━━━━━━━━\n" +
  "🪪 *আপনার প্রোফাইল তথ্য*\n\n" +
  "👤 *নাম:* " + fullName + "\n" +
  "🆔 *User ID:* " + user.telegramid + "\n" +
  "🔖 *Username:* " + username + "\n\n" +
  "━━━━━━━━━━━━━━━━━━\n" +
  "💎✨ *আপনার বিশ্বস্ত ডিজিটাল শপ*\n" +
  "🤝 আমাদের সঙ্গে থাকার জন্য আন্তরিক ধন্যবাদ!\n" +
  "💖 *শপিং করুন আনন্দের সঙ্গে!*";

Bot.sendMessage(welcome);
