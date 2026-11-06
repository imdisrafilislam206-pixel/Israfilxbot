/*CMD
 command: ➕ Set Button Action
 help: Select action for new button
 answer: বাটনে চাপলে কোন কাজ হবে? নিচের একটি কমান্ড হুবহু লিখুন: /start, 💎 Diamond Top-up, 🎮 Free Fire Items, 📦 My Orders, 💰 Add Balance, 🎧 Support, 🎁 Referral
 need_reply: true
CMD*/
if(!user || String(user.telegramid)!=="8312390543") return;
var action=String(message||"").trim();
var allowed=["/start","💎 Diamond Top-up","🎮 Free Fire Items","📦 My Orders","💰 Add Balance","🎧 Support","🎁 Referral"];
if(allowed.indexOf(action)<0){Bot.sendMessage("⚠️ তালিকা থেকে হুবহু একটি কমান্ড লিখুন।");return;}
var label=User.getProperty("draft_button_label");
var emoji=User.getProperty("draft_button_emoji")||"";
if(!label){Bot.sendMessage("⚠️ বাটনের নাম পাওয়া যায়নি। আবার শুরু করুন।");return;}
var list=Bot.getProperty("custom_buttons")||[];
if(typeof list==="string"){try{list=JSON.parse(list);}catch(e){list=[];}}
list.push({label:label,emoji:emoji,action:action});
Bot.setProperty("custom_buttons",list,"json");
User.setProperty("draft_button_label","","string");
User.setProperty("draft_button_emoji","","string");
Bot.sendMessage("✅ বাটন তৈরি হয়েছে: "+(emoji?emoji+" ":"")+label);
Bot.runCommand("🧩 Button Manager");
