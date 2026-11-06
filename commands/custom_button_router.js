/*CMD
 command: "*"
 help: Handle custom button selections
 need_reply: false
CMD*/
var txt=String(message||"").trim();
if(!user)return;
if(String(user.telegramid)==="8312390543"){
 var mode=User.getProperty("button_manage_mode");
 var items=Bot.getProperty("custom_buttons")||[];
 if(typeof items==="string"){try{items=JSON.parse(items);}catch(e){items=[];}}
 if(mode==="delete"){
  for(var i=0;i<items.length;i++){
   if(items[i].label===txt){
    items.splice(i,1);
    Bot.setProperty("custom_buttons",items,"json");
    User.setProperty("button_manage_mode","","string");
    Bot.sendMessage("ডিলিট হয়েছে: "+txt);
    Bot.runCommand("🧩 Button Manager");
    return;
   }
  }
 }
}
Bot.sendMessage("নির্বাচনটি পাওয়া যায়নি। আবার Button Manager খুলুন।");
