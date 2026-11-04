/*CMD
  command: /start
  aliases: ⬅️ Back to Home
  help: Open ISRAFILXSHOP
CMD*/
var name = user.first_name || "বন্ধু";
var balance = User.getProperty("balance") || 0;
var rank = User.getProperty("rank") || "Rookie";
var orders = User.getProperty("my_orders") || [];
var keyboard = "🛡️ Guild Glory Credit,\n💎 Add Funds / Deposit, 👤 My Profile,\n📦 My Orders, 🎧 Live Support";
if (user.telegramid == 8312390543) {
  keyboard += ",\n⚙️ Owner Control";
}
var welcome = "✦━━━━━━━━ ISRAFILX SHOP ━━━━━━━━✦\n";
welcome += "স্বাগতম, " + name + " 👋\n\n";
welcome += "💳 Wallet: ৳" + balance + "\n";
welcome += "🏅 Member Rank: " + rank + "\n";
welcome += "🧾 Total Orders: " + orders.length + "\n\n";
welcome += "আপনার পছন্দের সার্ভিস নিচের কিবোর্ড থেকে বেছে নিন।\n";
welcome += "✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦";
Bot.sendKeyboard(keyboard, welcome);