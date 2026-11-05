/*CMD
  command: groupsresult
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /groupsresult — HTTP success callback
var arr;try{arr=typeof content==="string"?JSON.parse(content):content;}catch(e){Bot.sendMessage("Groups response invalid.");return;}
if(!Array.isArray(arr)){Bot.sendMessage("FFGlory: "+((arr&&arr.error)||"Group list পাওয়া যায়নি"));return;}
var out="📂 *MY GLORY GROUPS*\nTotal: "+arr.length+"\n\n",buttons=[];
for(var i=0;i<arr.length&&i<30;i++){var g=arr[i];out+=(i+1)+". "+g.group_id+"\nClan: "+g.clan_id+"\nRegion: "+g.region+" | Status: "+g.status+"\nUptime: "+(g.uptime||"—")+"\n\n";buttons.push([{title:"⚙️ "+String(g.group_id).slice(0,12),command:"/groupaction "+g.group_id}]);}
buttons.push([{title:"🏠 Home",command:"/start"}]);Bot.sendInlineKeyboard(buttons,out);
