/*CMD
  command: /start
  help: Start Guild Glory
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases: 🔄 রিফ্রেশ মেনু, 🏠 মূল মেনু
  group:
CMD*/
var OWNER="8312390543",uid=String(user.telegramid);
if(uid===OWNER){
 var ownerKeys=["admin","products","orders","users","balance","group_post","support","api","reports"];
 for(var oi=0;oi<ownerKeys.length;oi++){Bot.setProperty("ffg_perm_"+OWNER+"_"+ownerKeys[oi],true,"boolean");}
 var ownerAllowed=Bot.getProperty("ffg_allowed_users",[]);
 if(!Array.isArray(ownerAllowed))ownerAllowed=[];
 if(ownerAllowed.indexOf(OWNER)<0){ownerAllowed.push(OWNER);Bot.setProperty("ffg_allowed_users",ownerAllowed,"json");}
}
var users=Bot.getProperty("ffg_all_users",[]);
if(!Array.isArray(users))users=[];
if(users.indexOf(uid)<0){users.push(uid);Bot.setProperty("ffg_all_users",users,"json");}
Bot.setProperty("ffg_user_"+uid,{name:String(user.first_name||"Telegram User"),username:String(user.username||""),id:uid,last_seen:new Date().toISOString()},"json");
if(uid===OWNER){
 Bot.sendKeyboard("👑 অ্যাডমিন প্যানেল, 👥 ইউজার ম্যানেজমেন্ট\n🔐 পারমিশন ম্যানেজমেন্ট, 📢 গ্রুপ পোস্ট\n💬 সাপোর্ট ইনবক্স, ⚙️ API সেটিংস\n💰 ব্যালেন্স ও লেনদেন, 🛍️ প্রোডাক্ট ও প্রাইস\n🔄 রিফ্রেশ মেনু, 🏠 মূল মেনু","🌟 GUILD GLORY — OWNER CONTROL CENTER\nআপনার Owner ID যাচাই হয়েছে। সব Owner permissions সক্রিয়।");
}else{
 Bot.sendKeyboard("🛍️ প্রোডাক্ট ও প্রাইস, 💬 সাপোর্টে যোগাযোগ\n🔐 পারমিশন অনুরোধ, 🏠 মূল মেনু","🌟 WELCOME TO GUILD GLORY\nনিচের মেনু থেকে আপনার প্রয়োজনীয় সেবা বেছে নিন।");
}