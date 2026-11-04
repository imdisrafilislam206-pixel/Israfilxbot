/*CMD
  command: /codeshop
  aliases: 🎟️ Guild Glory Code
  help: Guild Glory code shop
CMD*/
var price=Bot.getProperty("guild_code_price");
var codes=Bot.getProperty("guild_code_stock")||[];
var n=Array.isArray(codes)?codes.length:Number(codes)||0;
Bot.sendInlineKeyboard([{title:"🛒 All Packages",command:"/packages"},{title:"📦 My Orders",command:"/myorders"},{title:"🎧 Live Support",command:"/support"},{title:"⬅️ Back to Home",command:"/start"}],"🎟️ GUILD GLORY CODE SHOP\n\nPrice: "+(price==null?"Not set":"৳"+price)+"\nAvailable codes: "+n+"\n\nকোড অর্ডারের জন্য Live Support-এ যোগাযোগ করুন।");