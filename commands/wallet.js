/*CMD
  command: /wallet
  aliases: 👤 Profile
  help: Wallet and profile
  answer: Profile
CMD*/
var balance = User.getProperty("balance");
if (balance === undefined || balance === null) { balance = 0; }
var rank = User.getProperty("rank") || "New User";
var ids = User.getProperty("my_order_ids") || [];
Bot.sendMessage("👤 YOUR PROFILE\n\nName: "+(user.first_name || "")+"\nID: "+user.telegramid+"\nBalance: ৳"+balance+"\nRank: "+rank+"\nTotal Orders: "+ids.length);
