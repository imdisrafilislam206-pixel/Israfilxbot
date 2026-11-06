/*CMD
  command: admin
  help: Owner dashboard
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/
var OWNER="8312390543";
if(String(user.telegramid)!==OWNER){Bot.sendMessage("⛔ এই Admin Panel শুধু Owner-এর জন্য।");return;}
var users=Bot.getProperty("ffg_all_users",[]);if(!Array.isArray(users))users=[];
var group=Bot.getProperty("ffg_order_group","Not set");
Bot.sendKeyboard("/adminusers, /permissions\n/grouppost, /supportinbox\n/setordergroup, /apisetup\n/account, /groups\n/coupons, /transactions\n/history, /pricing\n/start","👑 GUILD GLORY OWNER PANEL\nRegistered users: "+users.length+"\nOrder group: "+group+"\n\nOwner-এর সব permissions চালু। অন্যদের জন্য আলাদা permission নির্বাচন করুন।");