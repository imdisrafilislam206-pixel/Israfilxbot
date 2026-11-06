/*CMD
 command: 🗑️ Delete Button
 help: Select a custom button to delete
 need_reply: false
CMD*/
if(!user || String(user.telegramid)!=="8312390543") return;
var list=Bot.getProperty("custom_buttons")||[];
if(typeof list==="string"){try{list=JSON.parse(list);}catch(e){list=[];}}
if(!list.length){Bot.sendKeyboard("➕ Add Button, 🔙 Back","🗑️ ডিলিট করার মতো কাস্টম বাটন নেই।");return;}
User.setProperty("button_manage_mode","delete","string");
Bot.sendKeyboard(list.map(function(x){return x.label;}).join(", ")+"\n🔙 Back","🗑️ কোন বাটনটি ডিলিট করবেন? তালিকা থেকে বেছে নিন।");
