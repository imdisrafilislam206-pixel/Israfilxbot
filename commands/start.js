/*CMD
  command: /start
  help: Start Guild Glory
  need_reply: false
  aliases: 🔄 রিফ্রেশ মেনু, 🏠 মূল মেনু
CMD*/
var OWNER="8312390543",uid=String(user.telegramid);
if(uid===OWNER){
 var ownerKeys=["admin","products","orders","users","balance","group_post","support","api","reports"];
 for(var oi=0;oi<ownerKeys.length;oi++)Bot.setProperty("ffg_perm_"+OWNER+"_"+ownerKeys[oi],true,"boolean");
 var allowed=Bot.getProperty("ffg_allowed_users",[]);
 if(!Array.isArray(allowed))allowed=[];
 if(allowed.indexOf(OWNER)<0){allowed.push(OWNER);Bot.setProperty("ffg_allowed_users",allowed,"json");}
}
var users=Bot.getProperty("ffg_all_users",[]);
if(!Array.isArray(users))users=[];
var isNewUser=users.indexOf(uid)<0;
if(isNewUser){users.push(uid);Bot.setProperty("ffg_all_users",users,"json");}
var startArg=String(params||"").trim();
if(isNewUser&&startArg.indexOf("ref_")===0){
 var referrer=startArg.substring(4);
 if(/^[0-9]{5,15}$/.test(referrer)&&referrer!==uid){
  var profile0=Bot.getProperty("ffg_user_"+uid,{});
  if(!profile0||typeof profile0!=="object")profile0={};
  if(!profile0.referred_by){
   var known=Bot.getProperty("ffg_all_users",[]);
   if(Array.isArray(known)&&known.indexOf(referrer)>=0){
    profile0.referred_by=referrer;profile0.referral_qualified=false;
    Bot.setProperty("ffg_user_"+uid,profile0,"json");
    var list=Bot.getProperty("ffg_referrals_"+referrer,[]);
    if(!Array.isArray(list))list=[];
    if(list.indexOf(uid)<0){list.push(uid);Bot.setProperty("ffg_referrals_"+referrer,list,"json");}
   }
  }
 }
}
var profile=Bot.getProperty("ffg_user_"+uid,{});
if(!profile||typeof profile!=="object")profile={};
profile.name=String(user.first_name||profile.name||"Telegram User");
profile.username=String(user.username||profile.username||"");
profile.id=uid;profile.last_seen=new Date().toISOString();
Bot.setProperty("ffg_user_"+uid,profile,"json");
if(uid===OWNER){
 Bot.sendKeyboard("👑 অ্যাডমিন প্যানেল, 👥 ইউজার ম্যানেজমেন্ট,\n🔐 পারমিশন, 🛠️ পণ্য ম্যানেজ,\n📢 গ্রুপ পোস্ট, 💬 সাপোর্ট ইনবক্স,\n🎁 রেফারেল সেটিংস, 🎟️ কুপন,\n💰 ব্যালেন্স, 📊 রিপোর্ট,\n🏠 মূল মেনু","🌟 GUILD GLORY — OWNER CONTROL CENTER\nOwner ID যাচাই হয়েছে। চ্যাটের লেখার ঘরের ওপরে থাকা বাটন থেকে কাজ বেছে নিন।");
}else{
 Bot.sendKeyboard("🛍️ Guild Glory Store, 🎁 রেফার করুন,\n🛍️ API প্রাইস, 💬 সাপোর্টে যোগাযোগ,\n🔐 পারমিশন অনুরোধ, 🏠 মূল মেনু","🌟 WELCOME TO GUILD GLORY\nস্বাগতম! নিচের কিবোর্ড থেকে প্রয়োজনীয় সেবা বেছে নিন।");
}