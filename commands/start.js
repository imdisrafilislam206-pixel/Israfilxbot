/*CMD
  command: /start
  help: Open ISRAFILXSHOP
  answer: Welcome to ISRAFILXSHOP
CMD*/
var name = user.first_name || "বন্ধু";
var balance = User.getProperty("balance");
if (balance === undefined || balance === null) { balance = 0; }
var rank = User.getProperty("rank") || "New User";
var orderIds = User.getProperty("my_order_ids") || [];
var orderCount = orderIds.length || 0;
var keyboard = "🛡️ Guild Glory Credit,\n💰 Add Funds / Deposit, 👤 Profile,\n📦 My Orders, 📞 Contact Admin,\n🛒 All Packages, 💎 Diamond Top-Up,\n🎟️ Code Shop, 📢 Channel & Group";
Bot.sendKeyboard(keyboard,
"👑 Hello, "+name+"! 👋\n\nWelcome to ISRAFILXSHOP! 🛒\n\n💰 Your Balance: ৳"+balance+
"\n⭐ Account Rank: "+rank+"\n📦 Total Orders: "+orderCount+
"\n\n🛡️ Guild Glory Credits are available!\nPlease select an option below:");
