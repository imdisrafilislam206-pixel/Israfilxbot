/*CMD
  command: apisetup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /apisetup — NEED_REPLY: true. Owner enters "api_key|master_key" in private chat.
if (String(user.telegramid) !== "8312390543") { Bot.sendMessage("⛔ Owner only."); return; }
var parts=String(message||"").trim().split("|");
if(parts.length!==2 || parts[0].indexOf("ak_")!==0 || parts[0].length<30 || parts[1].length<16){
 Bot.sendMessage("নতুন API Key|Master Key এই ফরম্যাটে পাঠাও। চ্যাটে অন্য কাউকে পাঠাবে না। আগের প্রকাশিত API Key ব্যবহার করবে না।");
 return;
}
Bot.setProperty("ffg_api_key",parts[0],"string");
Bot.setProperty("ffg_master_key",parts[1],"string");
Bot.sendMessage("✅ API credentials private bot storage-এ সেট হয়েছে। এখন Balance দিয়ে পরীক্ষা করো।",{is_reply:true});
