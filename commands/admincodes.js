/*CMD
  command: /admincodes
  aliases: 🎟️ Code Inventory
  help: Root admin Guild Glory code inventory
  need_reply: true
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendInlineKeyboard([{title:"⬅️ Owner Control",command:"/admin"}],"⛔ Access denied.");return;}
var codes=Bot.getProperty("guild_code_stock")||[];if(!Array.isArray(codes))codes=[];
var raw=String(message||"").trim();var a=raw.split("|");var act=(a[0]||"").toLowerCase().trim();
if(act==="add"&&a.slice(1).join("|").trim()){var newCode=a.slice(1).join("|").trim();codes.push(newCode);Bot.setProperty("guild_code_stock",codes,"json");Bot.sendMessage("✅ কোড স্টকে যোগ হয়েছে। মোট: "+codes.length);}
else if(act==="price"&&a.length>1){var price=Number(a[1]);if(isFinite(price)&&price>=0){Bot.setProperty("guild_code_price",price,"float");Bot.sendMessage("✅ কোডের দাম আপডেট হয়েছে: ৳"+price);}else Bot.sendMessage("❌ দাম সঠিক নয়।");}
else if(act==="clear"){Bot.setProperty("guild_code_stock",[],"json");Bot.sendMessage("⚠️ কোড স্টক খালি করা হয়েছে।");}
else Bot.sendMessage("🎟️ Guild Glory Code Stock: "+codes.length+"\nবর্তমান মূল্য: "+(Bot.getProperty("guild_code_price")||"Not set")+"\n\nকোড যোগ: add|YOUR-CODE\nদাম বদল: price|70\nস্টক খালি: clear");
Bot.sendInlineKeyboard([{title:"⬅️ Owner Control",command:"/admin"},{title:"🏠 Home",command:"/start"}],"🎟️ Code Inventory");
