// /notificationsresult — HTTP callback
var a;try{a=typeof content==="string"?JSON.parse(content):content;}catch(e){Bot.sendMessage("Notifications response invalid.");return;}
if(!Array.isArray(a)){Bot.sendMessage("FFGlory: "+((a&&a.error)||"Notifications পাওয়া যায়নি"));return;}
var s="🔔 *NOTIFICATIONS*\n\n";
for(var i=0;i<a.length;i++){var n=a[i];s+="• ["+(n.type||"info")+"] "+(n.title||"Notice")+"\n"+(n.message||"")+"\n\n";}
if(!a.length)s+="নতুন কোনো Notification নেই।";
Bot.sendInlineKeyboard([[{title:"🏠 Home",command:"/start"}]],s);
