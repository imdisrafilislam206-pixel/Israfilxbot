/*CMD
  command: /profile
  aliases: 👤 Profile
  help: View customer profile
CMD*/
var balance = User.getProperty("balance") || 0;
var rank = User.getProperty("rank") || "New User";
var orders = User.getProperty("my_orders") || [];
Bot.sendKeyboard("📦 My Orders, 💰 Add Funds / Deposit,\n⬅️ Back to Home", "👤 MY PROFILE\n\nName: "+(user.first_name || "User")+"\nChat ID: "+user.telegramid+"\nBalance: ৳"+balance+"\nRank: "+rank+"\nTotal Orders: "+orders.length);