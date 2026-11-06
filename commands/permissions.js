/*CMD
  command: permissions
  help: Manage per-user permissions
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/
var OWNER="8312390543";
if(String(user.telegramid)!==OWNER){Bot.sendMessage("⛔ শুধু Owner permission পরিচালনা করতে পারবেন।");return;}
var id=String(message||"").trim();
if(!/^\d{5,15}$/.test(id)){Bot.sendMessage("সঠিক Telegram numeric ID পাঠান।");return;}
if(id===OWNER){Bot.sendMessage("✅ Owner-এর সব permissions স্থায়ীভাবে চালু; এগুলো বন্ধ করা যাবে না।");return;}
Bot.setProperty("ffg_permission_target",id,"string");
var keys=["admin","products","orders","users","balance","group_post","support","api","reports"];
var labels=["Admin Panel","Products","Orders","User Management","Balance & Transactions","Group Post","Customer Support","API Settings","Reports"];
var keyboard="",summary="🔐 PERMISSION MANAGER\nUser ID: "+id+"\n\n";
for(var i=0;i<keys.length;i++){
 var on=Bot.getProperty("ffg_perm_"+id+"_"+keys[i],false)===true;
 summary+=(on?"✅ ":"❌ ")+labels[i]+"\n";
 keyboard+=(on?"❌ ":"✅ ")+"/setpermission "+keys[i]+"\n";
}
keyboard+="/admin";
Bot.sendKeyboard(keyboard,summary+"\nনিচের বাটনে চাপলে সংশ্লিষ্ট permission ON/OFF হবে।");