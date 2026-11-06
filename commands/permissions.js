/*CMD
  command: permissions
  help: Manage per-user permissions
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases: 🔐 পারমিশন ম্যানেজমেন্ট
  group:
CMD*/
var OWNER="8312390543";
if(String(user.telegramid)!==OWNER){Bot.sendMessage("⛔ শুধু Owner permission পরিচালনা করতে পারবেন।");return;}
var id=String(message||"").trim();
if(!/^\d{5,15}$/.test(id)){Bot.sendMessage("যে ইউজারকে Permission দিতে চান তার Telegram ID পাঠান।");return;}
if(id===OWNER){Bot.sendMessage("👑 Owner-এর সব Permission স্থায়ীভাবে চালু। এগুলো বন্ধ করা যাবে না।");return;}
Bot.setProperty("ffg_permission_target",id,"string");
var keys=["admin","products","orders","users","balance","group_post","support","api","reports"];
var labels=["👑 Admin Panel","🛍️ Products","📦 Orders","👥 User Management","💰 Balance & Transactions","📢 Group Post","💬 Customer Support","⚙️ API Settings","📊 Reports"];
var buttons=[],summary="🔐 PERMISSION CONTROL\nUser ID: "+id+"\n\n";
for(var i=0;i<keys.length;i++){
 var on=Bot.getProperty("ffg_perm_"+id+"_"+keys[i],false)===true;
 summary+=(on?"🟢 চালু  ":"🔴 বন্ধ  ")+labels[i]+"\n";
 buttons.push([{title:(on?"🟢 ":"🔴 ")+labels[i],command:"/setpermission "+keys[i]}]);
}
buttons.push([{title:"↩️ Admin Panel",command:"/admin"},{title:"🏠 Home",command:"/start"}]);
Bot.sendInlineKeyboard(buttons,summary+"\nযে Permission পরিবর্তন করতে চান, নিচের বাটনে চাপ দিন।");
