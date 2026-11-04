/*CMD
  command: /guild
  aliases: 🛡️ Guild Glory Credit
  help: Guild Glory credit shop
CMD*/
var price = Bot.getProperty("guild_glory_price");
var stock = Bot.getProperty("guild_glory_stock") || 0;
var priceText = (price === undefined || price === null) ? "অ্যাডমিন এখনো মূল্য সেট করেননি" : "৳" + price + " / Credit";
Bot.sendKeyboard("📦 My Orders, 📞 Contact Admin,\n⬅️ Back to Home", "🛡️ GUILD GLORY CREDIT\n\nমূল্য: " + priceText + "\nস্টক: " + stock + "\n\nঅর্ডার করতে Contact Admin চাপুন।");