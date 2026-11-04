/*CMD
  command: /submittrx
  aliases: 📨 Submit TrxID
  help: Submit payment transaction ID
  need_reply: true
CMD*/
var trx=String(message||"").trim();
if(trx.length<5){Bot.sendMessage("❌ TrxID সঠিক মনে হচ্ছে না। আবার Submit TrxID চাপুন।");return;}
var pending=Bot.getProperty("pending_deposits")||[];
if(!Array.isArray(pending))pending=[];
pending.push({chat_id:user.telegramid,name:user.first_name||"Customer",username:user.username||"",trx_id:trx,status:"Pending",created_at:Date.now()});
Bot.setProperty("pending_deposits",pending,"json");
Bot.sendMessageToChatWithId(8312390543,"💳 NEW DEPOSIT REQUEST\nCustomer: "+(user.first_name||"Customer")+"\nChat ID: "+user.telegramid+"\nTrxID: "+trx+"\nStatus: Pending\n\nঅ্যাডমিন পেমেন্ট যাচাই করে ব্যালেন্স যোগ করবেন।");
Bot.sendInlineKeyboard([{title:"💎 Back to Deposit",command:"/deposit"},{title:"🏠 Home",command:"/start"}],"✅ TrxID জমা হয়েছে। পেমেন্ট যাচাই না হওয়া পর্যন্ত ব্যালেন্স যোগ হবে না।");
