/*CMD
  command: /start
  aliases: ⬅️ Back to Home
  help: Open ISRAFILXSHOP
  answer: Welcome to ISRAFILXSHOP
CMD*/
var name = user.first_name || "বন্ধু";
var balance = User.getProperty("balance") || 0;
var rank = User.getProperty("rank") || "New User";
var ids = User.getProperty("my_order_ids") || [];
var keyboard = "🛡️ Guild Glory Credit,\n💰 Add Funds / Deposit, 👤 Profile,\n📦 My Orders, 📞 Contact Admin,\n🛒 All Packages, 💎 Diamond Top-Up,\n🎟️ Code Shop";
Bot.sendKeyboard(keyboard, "👑 Hello, " + name + "!\n\nWelcome to ISRAFILXSHOP 🛒\n\n💰 Balance: ৳" + balance + "\n⭐ Rank: " + rank + "\n📦 Total Orders: " + ids.length + "\n\nনিচের মেনু থেকে একটি বাটন বেছে নিন।");