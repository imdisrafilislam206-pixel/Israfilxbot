/*CMD
  command: 💰 Balance & Payments
  help: Balance and Payments Admin
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ এই মেনু শুধু মালিকের জন্য।");
  return;
}
Bot.sendKeyboard("📋 Transactions, ⚙️ Payment Settings\n🔙 Back, 🏠 Home", "💰 Balance & Payments\n\nলেনদেনের খাতা ও পেমেন্ট যাচাই এখনো যুক্ত হয়নি। যাচাই ছাড়া কোনো পেমেন্ট সম্পন্ন দেখানো হবে না।");
