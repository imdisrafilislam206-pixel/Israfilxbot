/*CMD
  command: /adminmenutoggle
  aliases: 🔁 Enable / Disable
  help: Toggle a home menu button
  need_reply: true
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendMessage("⛔ Access denied.");return;}
var n=Number(String(message||"").trim())-1,m=Bot.getProperty("home_menu_buttons")||[];
if(!Array.isArray(m)||n<0||n>=m.length){Bot.sendMessage("ভুল সিরিয়াল। Button Editor-এ তালিকা দেখুন।");return;}
m[n].enabled=m[n].enabled===false;Bot.setProperty("home_menu_buttons",m,"json");
Bot.sendInlineKeyboard([{title:"🔘 Button Editor",command:"/adminmenu"},{title:"⬅️ Owner Control",command:"/admin"}],"✅ বাটনের অবস্থা পরিবর্তন হয়েছে।");