/*CMD
  command: /codeshop
  aliases: 🎟️ Code Shop
  help: Guild Glory code shop
CMD*/
var price = Bot.getProperty("guild_code_price");
var stock = Bot.getProperty("guild_code_stock") || 0;
var priceText = (price === undefined || price === null) ? "অ্যাডমিন মূল্য সেট করেননি" : "৳" + price;
Bot.sendKeyboard("📦 My Orders, 📞 Contact Admin,\n⬅️ Back to Home", "🎟️ CODE SHOP\n\nমূল্য: " + priceText + "\nAvailable codes: " + stock + "\n\nকোড কিনতে Contact Admin চাপুন। পেমেন্ট যাচাই ও কোড স্টক যোগ না হওয়া পর্যন্ত অটো ডেলিভারি চালু নয়।");