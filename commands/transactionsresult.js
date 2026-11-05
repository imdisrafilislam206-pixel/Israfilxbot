/*CMD
  command: transactionsresult
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /transactionsresult — HTTP callback
var a;try{a=typeof content==="string"?JSON.parse(content):content;}catch(e){Bot.sendMessage("Transaction response invalid.");return;}
if(!Array.isArray(a)){Bot.sendMessage("FFGlory: "+((a&&a.error)||"Transactions পাওয়া যায়নি"));return;}
var s="📜 *TRANSACTIONS (Last 50)*\n\n";
for(var i=0;i<a.length&&i<50;i++){var t=a[i];s+=(i+1)+". "+t.id+"\nStatus: "+t.status+"\nBasic: "+(t.basic_credits||0)+" | Premium: "+(t.premium_credits||0)+"\nDate: "+(t.created_at||"—")+"\n\n";}
Bot.sendInlineKeyboard([[{title:"🔄 Refresh",command:"/transactions"}],[{title:"🏠 Home",command:"/start"}]],s);
