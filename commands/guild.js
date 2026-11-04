/*CMD
  command: /guild
  aliases: 🛡️ Guild Glory Credit
  help: Guild Glory credit shop
CMD*/
var price=Bot.getProperty("guild_glory_price");
var stock=Bot.getProperty("guild_glory_stock")||0;
var label=(price==null)?"Price not set":"৳"+price+" / Credit";
Bot.sendInlineKeyboard([{title:"🛒 All Packages",command:"/packages"},{title:"🎟️ Guild Glory Code",command:"/codeshop"},{title:"📦 My Orders",command:"/myorders"},{title:"🎧 Contact Admin",command:"/support"},{title:"⬅️ Back to Home",command:"/start"}],"🛡️ GUILD GLORY CREDIT\n\nPrice: "+label+"\nAvailable: "+stock+"\n\nঅর্ডার/ডেলিভারির জন্য Contact Admin চাপুন।");