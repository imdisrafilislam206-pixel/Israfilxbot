/*CMD
  command: /adminpayments
  aliases: 💳 Payment Setup
  help: Root admin payment settings
  need_reply: true
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendInlineKeyboard([{title:"⬅️ Owner Control",command:"/admin"}],"⛔ Access denied.");return;}
var raw=String(message||"").trim();var a=raw.split("|");var method=(a[0]||"").toLowerCase().trim();var number=a.slice(1).join("|").trim();
var key=method==="bkash"?"pay_bkash":method==="nagad"?"pay_nagad":method==="rocket"?"pay_rocket":null;
if(key&&number){Bot.setProperty(key,number,"string");Bot.sendMessage("✅ "+method+" নম্বর আপডেট হয়েছে।");}
else Bot.sendMessage("বর্তমান সেটিংস:\nbKash: "+(Bot.getProperty("pay_bkash")||"Not set")+"\nNagad: "+(Bot.getProperty("pay_nagad")||"Not set")+"\nRocket: "+(Bot.getProperty("pay_rocket")||"Not set")+"\n\nএক লাইনে লিখুন: bkash|01XXXXXXXXX অথবা nagad|... অথবা rocket|...");
Bot.sendInlineKeyboard([{title:"⬅️ Owner Control",command:"/admin"},{title:"🏠 Home",command:"/start"}],"💳 Payment Setup");
