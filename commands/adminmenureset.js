/*CMD
  command: /adminmenureset
  aliases: ↩️ Reset Default
  help: Restore default home buttons
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendMessage("⛔ Access denied.");return;}
Bot.setProperty("home_menu_buttons",[{title:"🛡️ Guild Glory Credit",command:"/guild",enabled:true},{title:"💎 Add Funds / Deposit",command:"/deposit",enabled:true},{title:"👤 My Profile",command:"/profile",enabled:true},{title:"📦 My Orders",command:"/myorders",enabled:true},{title:"🛒 All Packages",command:"/packages",enabled:true},{title:"🎧 Live Support",command:"/support",enabled:true}],"json");
Bot.sendInlineKeyboard([{title:"🔘 Button Editor",command:"/adminmenu"},{title:"⬅️ Owner Control",command:"/admin"}],"↩️ ডিফল্ট বাটন ফিরিয়ে আনা হয়েছে।");