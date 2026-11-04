/*CMD
  command: /start
  aliases: ⬅️ Back to Home
  help: Open ISRAFILXSHOP
CMD*/
var name = user.first_name || "বন্ধু";
var balance = User.getProperty("balance") || 0;
var rank = User.getProperty("rank") || "Rookie";
var orders = User.getProperty("my_orders") || [];
var keyboard = "🛡️ Guild Glory Credit,\n💎 Add Funds / Deposit, 👤 My Profile,\n📦 My Orders, 🛒 All Packages,\n🎧 Live Support";
if (user.telegramid == 8312390543) keyboard += ",\n⚙️ Owner Control";
var msg = "✦━━━━━━ ISRAFILX SHOP ━━━━━━✦\nস্বাগতম, " + name + " 👋\n\n💳 Wallet: ৳" + balance + "\n🏅 Rank: " + rank + "\n🧾 Orders: " + orders.length + "\n\nনিচের কিবোর্ড থেকে সার্ভিস বেছে নিন।\n✦━━━━━━━━━━━━━━━━━━━━━━✦";
Bot.sendKeyboard(keyboard,msg);