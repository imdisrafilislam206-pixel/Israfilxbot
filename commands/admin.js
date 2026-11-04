/*CMD
  command: /admin
  aliases: 🛠️ Admin Panel
  help: Root admin panel
CMD*/
var ROOT_ADMIN_ID = 8312390543;
if (user.telegramid != ROOT_ADMIN_ID) {
  Bot.sendKeyboard("⬅️ Back to Home", "⛔ এই প্যানেল শুধু Root Admin ব্যবহার করতে পারবেন।");
  return;
}
Bot.sendKeyboard("👥 Manage Users,\n📦 Manage Products, 💳 Payment Settings,\n🎟️ Code Stock, 📋 Manage Orders,\n📢 Broadcast, ⚙️ Shop Settings,\n⬅️ Back to Home", "🛠️ ROOT ADMIN PANEL\n\nAdmin access verified.\nআপনি কোন সেটিংস পরিচালনা করতে চান?");