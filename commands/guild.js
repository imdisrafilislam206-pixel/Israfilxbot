/*CMD
  command: /guild
  aliases: 🛡️ Guild Glory Credit
  help: Guild Glory credit shop
CMD*/
var price=Bot.getProperty("guild_glory_price");
var stock=Bot.getProperty("guild_glory_stock")||0;
var label=(price==null)?"Price not set":"৳"+price+" / Credit";
Bot.sendKeyboard("🛒 All Packages, 🎟️ Guild Glory Code,\n📦 My Orders, ⬅️ Back to Home","🛡️ GUILD GLORY CREDIT\n\nPrice: "+label+"\nAvailable: "+stock+"\n\nঅর্ডার করতে Live Support চাপুন অথবা প্যাকেজ মেনু দেখুন।");