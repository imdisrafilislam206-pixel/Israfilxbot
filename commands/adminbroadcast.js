/*CMD
  command: /adminbroadcast
  aliases: 📣 Broadcast
  help: Root admin broadcast to bot users
  need_reply: true
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendInlineKeyboard([{title:"⬅️ Owner Control",command:"/admin"}],"⛔ Access denied.");return;}
var textToSend=String(message||"").trim();
if(!textToSend){Bot.sendMessage("❌ খালি মেসেজ পাঠানো যাবে না।");return;}
Bot.sendMessageToAllPrivateChats("📢 ISRAFILX SHOP NOTICE\n\n"+textToSend);
Bot.sendMessage("✅ Broadcast পাঠানোর অনুরোধ সম্পন্ন হয়েছে।");
Bot.sendInlineKeyboard([{title:"⬅️ Owner Control",command:"/admin"},{title:"🏠 Home",command:"/start"}],"📣 Broadcast");
