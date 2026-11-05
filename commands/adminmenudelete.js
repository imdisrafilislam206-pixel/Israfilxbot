/*CMD
  command: /adminmenudelete
  aliases: 🗑️ Delete Button
  help: Delete a home menu button
  need_reply: true
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendMessage("⛔ Access denied.");return;}
var n=Number(String(message||"").trim())-1,m=Bot.getProperty("home_menu_buttons")||[];
if(!Array.isArray(m)||n<0||n>=m.length){Bot.sendMessage("ভুল সিরিয়াল। Button Editor-এ তালিকা দেখুন।");return;}
var b=m.splice(n,1)[0];Bot.setProperty("home_menu_buttons",m,"json");
Bot.sendInlineKeyboard([{title:"🔘 Button Editor",command:"/adminmenu"},{title:"⬅️ Owner Control",command:"/admin"}],"🗑️ বাটন মুছে ফেলা হয়েছে: "+b.title);