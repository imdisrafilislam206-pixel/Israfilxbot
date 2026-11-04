/*CMD
  command: /admin
  aliases: ⚙️ Owner Control
  help: Root admin control panel
CMD*/
var ROOT_ADMIN_ID = 8312390543;
if (user.telegramid != ROOT_ADMIN_ID) {
  Bot.sendKeyboard("⬅️ Back to Home", "⛔ Access denied.");
  return;
}
var keyboard = "👥 User Control,\n🛍️ Product & Price, 💳 Payment Setup,\n🎟️ Code Inventory, 📋 Order Desk,\n📣 Broadcast, 🔧 Shop Design,\n⬅️ Back to Home";
var message = "✦━━━━━━ OWNER CONTROL ━━━━━━✦\n";
message += "🔐 Root Admin Verified\n";
message += "Admin ID: " + user.telegramid + "\n\n";
message += "নিচের কিবোর্ড থেকে একটি বিভাগ বেছে নিন।\n";
message += "✦━━━━━━━━━━━━━━━━━━━━━━━━✦";
Bot.sendKeyboard(keyboard, message);