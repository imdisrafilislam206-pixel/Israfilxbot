/*CMD
  command: accountresult
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /accountresult — HTTP success callback
var data;try{data=typeof content==="string"?JSON.parse(content):content;}catch(e){Bot.sendMessage("API response পড়া যায়নি।");return;}
if(data&&data.error){Bot.sendMessage("FFGlory API Error: "+data.error);return;}
var uid=String(user.telegramid),p=Bot.getProperty("ffg_lifetime_"+uid,{received_basic:0,received_premium:0,spent_basic:0,spent_premium:0});
if(!p||typeof p!=="object")p={received_basic:0,received_premium:0,spent_basic:0,spent_premium:0};
var msg="💳 *FFGlory Account*\nUsername: "+(data.username||"—")+"\n\n🟦 Basic balance: "+(data.basic_credits||0)+"\n🟪 Premium balance: "+(data.premium_credits||0)+"\nMax groups: "+(data.max_groups||0)+"\n\n📊 *Bot-recorded lifetime ledger*\nReceived Basic: "+p.received_basic+"\nReceived Premium: "+p.received_premium+"\nSpent Basic: "+p.spent_basic+"\nSpent Premium: "+p.spent_premium;
Bot.sendInlineKeyboard([[{title:"🔄 Refresh",command:"/account"}],[{title:"🏠 Home",command:"/start"}]],msg);
