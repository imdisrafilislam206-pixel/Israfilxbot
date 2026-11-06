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
var profile=Bot.getProperty("ffg_user_"+uid,{});
if(!profile||typeof profile!=="object")profile={};
profile.name=String(user.first_name||profile.name||"Telegram User");
profile.username=String(user.username||profile.username||"");
profile.id=uid;
profile.last_seen=new Date().toISOString();
Bot.setProperty("ffg_user_"+uid,profile,"json");
if(uid===OWNER){
 Bot.sendInlineKeyboard([
  [{title:"👑 অ্যাডমিন প্যানেল",command:"/admin"}],
  [{title:"👥 ইউজার ম্যানেজমেন্ট",command:"/adminusers"},{title:"🔐 পারমিশন",command:"/permissions"}],
  [{title:"📢 গ্রুপ পোস্ট",command:"/grouppost"},{title:"💬 সাপোর্ট ইনবক্স",command:"/supportinbox"}],
  [{title:"🛠️ পণ্য ম্যানেজ",command:"/adminproducts"},{title:"🛍️ API প্রাইস",command:"/pricing"}],
  [{title:"💰 ব্যালেন্স",command:"/account"}],
  [{title:"📊 রিপোর্ট",command:"/groups"},{title:"⚙️ API সেটিংস",command:"/apisetup"}]
 ],"🌟 GUILD GLORY — OWNER CONTROL CENTER\nআপনার Owner ID যাচাই হয়েছে। নিচের বাটন থেকে কাজ বেছে নিন।");
}else{
 Bot.sendInlineKeyboard([
  [{title:"🛍️ Guild Glory Store",command:"/store"}],
  [{title:"🛍️ API প্রাইস",command:"/pricing"}],
  [{title:"💬 সাপোর্টে যোগাযোগ",command:"/contactadmin"}],
  [{title:"🔐 পারমিশন অনুরোধ",command:"/requestpermission"}]
 ],"🌟 WELCOME TO GUILD GLORY\nস্বাগতম! নিচের বাটন থেকে প্রয়োজনীয় সেবা বেছে নিন।");
}