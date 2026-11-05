/*CMD
  command: /adminmenedit
  aliases: ✏️ Rename / Change Link
  help: Edit a home menu button
  need_reply: true
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendMessage("⛔ Access denied.");return;}
var a=String(message||"").split("|"),m=Bot.getProperty("home_menu_buttons")||[],allowed=["/guild","/deposit","/profile","/myorders","/packages","/support","/diamond","/codeshop"],n=Number(a[0])-1;
if(a.length<3||!Array.isArray(m)||n<0||n>=m.length||!a[1].trim()||allowed.indexOf(a[2].trim())<0){Bot.sendMessage("ফরম্যাট: serial|New Button Name|/command");return;}
m[n].title=a[1].trim();m[n].command=a[2].trim();m[n].enabled=true;Bot.setProperty("home_menu_buttons",m,"json");
Bot.sendInlineKeyboard([{title:"🔘 Button Editor",command:"/adminmenu"},{title:"⬅️ Owner Control",command:"/admin"}],"✅ বাটনের নাম/গন্তব্য পরিবর্তন হয়েছে।");