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
 if(mode==="delete" || mode==="edit"){
  var found=-1;
  for(var i=0;i<items.length;i++)if(items[i].label===txt)found=i;
  if(found>=0 && mode==="delete"){
   items.splice(found,1);Bot.setProperty("custom_buttons",items,"json");
   User.setProperty("button_manage_mode","","string");
   Bot.sendMessage("✅ বাটন ডিলিট হয়েছে: "+txt);
   Bot.runCommand("🧩 Button Manager");return;
  }
  if(found>=0 && mode==="edit"){
   User.setProperty("button_edit_index",found,"integer");
   User.setProperty("button_manage_mode","edit_field","string");
   Bot.sendKeyboard("✏️ Edit Name, 🎨 Edit Emoji\n⚙️ Edit Action, 🔙 Back","কোন অংশটি পরিবর্তন করবেন? "+txt);return;
  }
 }
 if(mode==="edit_field"){
  var map={"✏️ Edit Name":"label","🎨 Edit Emoji":"emoji","⚙️ Edit Action":"action"};
  if(map[txt]){
   User.setProperty("button_edit_field",map[txt],"string");
   User.setProperty("button_manage_mode","edit_value","string");
   Bot.sendMessage("নতুন মান লিখে পাঠান। ইমোজি মুছতে - লিখুন।");return;
  }
 }
 if(mode==="edit_value"){
  var field=User.getProperty("button_edit_field");
  var idx=User.getProperty("button_edit_index");
  if(idx>=0 && idx<items.length && field){
   if(field==="action"){
    var allowed=["/start","💎 Diamond Top-up","🎮 Free Fire Items","📦 My Orders","💰 Add Balance","🎧 Support","🎁 Referral"];
    if(allowed.indexOf(txt)<0){Bot.sendMessage("⚠️ সমর্থিত কমান্ডের একটি হুবহু লিখুন।");return;}
   }
   if(field==="label" && (!txt || txt.length>50)){Bot.sendMessage("⚠️ নাম ১-৫০ অক্ষরের মধ্যে লিখুন।");return;}
   if(field==="emoji" && txt.length>12){Bot.sendMessage("⚠️ একটি ইমোজি দিন।");return;}
   items[idx][field]=(field==="emoji" && txt==="-")?"":txt;
   Bot.setProperty("custom_buttons",items,"json");
   User.setProperty("button_manage_mode","","string");
   Bot.sendMessage("✅ বাটন আপডেট হয়েছে।");
   Bot.runCommand("🧩 Button Manager");return;
  }
 }
}
var custom=Bot.getProperty("custom_buttons")||[];
if(typeof custom==="string"){try{custom=JSON.parse(custom);}catch(e){custom=[];}}
for(var j=0;j<custom.length;j++){
 var shown=((custom[j].emoji||"")+" "+custom[j].label).trim();
 if(txt===custom[j].label || txt===shown){Bot.runCommand(custom[j].action);return;}
}
Bot.sendMessage("এই লেখা কোনো বাটনের সঙ্গে মেলেনি। /start দিয়ে মেনু খুলুন।");
