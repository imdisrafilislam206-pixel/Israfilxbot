/*CMD
  command: /profile
  aliases: 👤 My Profile
  help: View customer profile
CMD*/
var balance = User.getProperty("balance") || 0;
var rank = User.getProperty("rank") || "Rookie";
var orders = User.getProperty("my_orders") || [];
var keyboard = "📦 My Orders, 💎 Add Funds / Deposit,\n⬅️ Back to Home";
var message = "✦━━━━━━ MY PROFILE ━━━━━━✦\n";
message += "👤 Name: " + (user.first_name || "Customer") + "\n";
message += "🆔 Chat ID: " + user.telegramid + "\n";
message += "💳 Wallet: ৳" + balance + "\n";
message += "🏅 Rank: " + rank + "\n";
message += "🧾 Orders: " + orders.length + "\n";
message += "✦━━━━━━━━━━━━━━━━━━━━━━✦";
Bot.sendKeyboard(keyboard, message);