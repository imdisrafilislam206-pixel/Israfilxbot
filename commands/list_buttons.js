/*CMD
 command: 📋 List Buttons
 help: List custom dashboard buttons
 need_reply: false
CMD*/
if(!user || String(user.telegramid)!=="8312390543") return;
var list=Bot.getProperty("custom_buttons")||[];
if(typeof list==="string"){try{list=JSON.parse(list);}catch(e){list=[];}}
var out="📋 *আপনার কাস্টম বাটন তালিকা*\n━━━━━━━━━━━━━━━━━━\n";
if(!list.length)out+="এখনো কোনো কাস্টম বাটন নেই।";
for(var i=0;i<list.length;i++)out+="\n"+(i+1)+". "+(list[i].emoji||"")+" "+list[i].label+"\n   কাজ: "+list[i].action+"\n";
Bot.sendKeyboard("➕ Add Button, ✏️ Edit Button\n🗑️ Delete Button, 🔙 Back",out);
