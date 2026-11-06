/*CMD
  command: /start
  help: Start Guild Glory
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/
var OWNER="8312390543",uid=String(user.telegramid);
var users=Bot.getProperty("ffg_all_users",[]);
if(!Array.isArray(users))users=[];
if(users.indexOf(uid)<0){users.push(uid);Bot.setProperty("ffg_all_users",users,"json");}
Bot.setProperty("ffg_user_"+uid,{name:String(user.first_name||"Telegram User"),username:String(user.username||""),id:uid,last_seen:new Date().toISOString()},"json");
if(uid===OWNER){
 Bot.sendKeyboard("/admin, /adminusers\n/permissions, /grouppost\n/supportinbox, /setordergroup\n/apisetup, /account\n/pricing, /start","🌟 Guild Glory — Owner Panel\nআপনার Owner ID যাচাই হয়েছে। সব Owner permissions চালু আছে।");
}else{
 Bot.sendKeyboard("/pricing, /contactadmin\n/requestpermission, /start","🌟 Welcome to Guild Glory!\nপ্রয়োজনীয় অপশন নিচের Reply Keyboard থেকে বেছে নিন।\nAdmin permission প্রয়োজন হলে Request Permission চাপুন।");
}