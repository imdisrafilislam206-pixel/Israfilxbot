/*CMD
  command: ⚙️ Shop Settings
  help: Shop Settings
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ এই মেনু শুধু মালিকের জন্য।");
  return;
}
Bot.sendKeyboard("✏️ Edit Shop Name, ✏️ Edit Welcome Text\n🔙 Back, 🏠 Home", "⚙️ Shop Settings\n\nদোকানের নাম ও Welcome Text-এর সম্পাদনা Telegram-এর Admin Panel থেকেই যুক্ত করা হবে।");
