/*CMD
 command: ✏️ Edit Button
 help: Select a custom button to edit
 need_reply: false
CMD*/
if(!user || String(user.telegramid)!=="8312390543") return;
var list=Bot.getProperty("custom_buttons")||[];
if(typeof list==="string"){try{list=JSON.parse(list);}catch(e){list=[];}}
if(!list.length){Bot.sendKeyboard("➕ Add Button, 🔙 Back","✏️ এডিট করার মতো কাস্টম বাটন নেই।");return;}
User.setProperty("button_manage_mode","edit","string");
Bot.sendKeyboard(list.map(function(x){return x.label;}).join(", ")+"\n🔙 Back","✏️ কোন বাটনটি এডিট করবেন? তালিকা থেকে বেছে নিন।");
