/*CMD
  command: historyresult
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /historyresult — HTTP callback
var a;try{a=typeof content==="string"?JSON.parse(content):content;}catch(e){Bot.sendMessage("History response invalid.");return;}
if(!Array.isArray(a)){Bot.sendMessage("FFGlory: "+((a&&a.error)||"History পাওয়া যায়নি"));return;}
var s="📈 *GROUP HISTORY*\n\n";
for(var i=0;i<a.length&&i<40;i++){var g=a[i];s+=(i+1)+". "+g.group_id+"\nClan: "+g.clan_id+" | Region: "+g.region+"\nStatus: "+g.status+" | Glory farmed: "+(g.glory_farmed||0)+"\n\n";}
Bot.sendInlineKeyboard([[{title:"🔄 Refresh",command:"/history"}],[{title:"🏠 Home",command:"/start"}]],s);
