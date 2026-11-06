/*CMD
  command: setpermission
  help: Toggle one permission for selected user
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/

var OWNER = "8312390543";
if (String(user.telegramid) !== OWNER) { Bot.sendMessage("⛔ শুধু Owner permission বদলাতে পারবেন।"); return; }
var id = String(Bot.getProperty("ffg_permission_target", ""));
if (!/^\d{5,15}$/.test(id) || id === OWNER) { Bot.sendMessage("আগে Permissions থেকে একটি User ID নির্বাচন করুন।"); return; }
var raw = String(params || "").trim().toLowerCase();
var map = {
  "admin":"admin","products":"products","orders":"orders","users":"users",
  "balance":"balance","group_post":"group_post","support":"support","api":"api","reports":"reports"
};
var parts = raw.split(/\s+/);
var key = map[parts[0]];
if (!key) { Bot.sendMessage("Permission key পাওয়া যায়নি।"); return; }
var current = Bot.getProperty("ffg_perm_" + id + "_" + key, false) === true;
var next = !current;
Bot.setProperty("ffg_perm_" + id + "_" + key, next, "boolean");
var labels={admin:"👑 Admin Panel",products:"🛍️ Products",orders:"📦 Orders",users:"👥 User Management",balance:"💰 Balance & Transactions",group_post:"📢 Group Post",support:"💬 Customer Support",api:"⚙️ API Settings",reports:"📊 Reports"};
var keys=["admin","products","orders","users","balance","group_post","support","api","reports"];
var names=["👑 Admin Panel","🛍️ Products","📦 Orders","👥 User Management","💰 Balance & Transactions","📢 Group Post","💬 Customer Support","⚙️ API Settings","📊 Reports"];
var buttons=[],summary="🔐 PERMISSION CONTROL\nUser ID: "+id+"\n\n";
for(var i=0;i<keys.length;i++){var on=Bot.getProperty("ffg_perm_"+id+"_"+keys[i],false)===true;summary+=(on?"🟢 চালু  ":"🔴 বন্ধ  ")+names[i]+"\n";buttons.push([{title:(on?"🟢 ":"🔴 ")+names[i],command:"/setpermission "+keys[i]}]);}
buttons.push([{title:"↩️ Admin Panel",command:"/admin"},{title:"🏠 Home",command:"/start"}]);
Bot.sendInlineKeyboard(buttons,(next?"✅ চালু: ":"❌ বন্ধ: ")+labels[key]+"\n\n"+summary);
