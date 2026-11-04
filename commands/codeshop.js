/*CMD
  command: /codeshop
  aliases: 🎟️ Guild Glory Code
  help: Guild Glory code shop
CMD*/
var price=Bot.getProperty("guild_code_price");
var codes=Bot.getProperty("guild_code_stock")||[];
var n=Array.isArray(codes)?codes.length:Number(codes)||0;
Bot.sendKeyboard("🛒 All Packages, 📦 My Orders,\n🎧 Live Support, ⬅️ Back to Home","🎟️ GUILD GLORY CODE SHOP\n\nPrice: "+(price==null?"Not set":"৳"+price)+"\nAvailable codes: "+n+"\n\nকোড কেনার জন্য Live Support-এ যোগাযোগ করুন।");