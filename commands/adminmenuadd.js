/*CMD
  command: /adminmenuadd
  aliases: ➕ Add Button
  help: Add a home menu button
  need_reply: true
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendMessage("⛔ Access denied.");return;}
var a=String(message||"").split("|");var allowed=["/guild","/deposit","/profile","/myorders","/packages","/support","/diamond","/codeshop"];
if(a.length<2||!a[0].trim()||allowed.indexOf(a[1].trim())<0){Bot.sendMessage("ফরম্যাট: Button Name|/command\nঅনুমোদিত: /guild, /deposit, /profile, /myorders, /packages, /support, /diamond, /codeshop");return;}
var m=Bot.getProperty("home_menu_buttons")||[];
if(!Array.isArray(m))m=[{title:"🛡️ Guild Glory Credit",command:"/guild",enabled:true},{title:"💎 Add Funds / Deposit",command:"/deposit",enabled:true},{title:"👤 My Profile",command:"/profile",enabled:true},{title:"📦 My Orders",command:"/myorders",enabled:true},{title:"🛒 All Packages",command:"/packages",enabled:true},{title:"🎧 Live Support",command:"/support",enabled:true}];
m.push({title:a[0].trim(),command:a[1].trim(),enabled:true});Bot.setProperty("home_menu_buttons",m,"json");
Bot.sendInlineKeyboard([{title:"🔘 Button Editor",command:"/adminmenu"},{title:"⬅️ Owner Control",command:"/admin"}],"✅ নতুন বাটন যোগ হয়েছে।");