/*CMD
  command: /adminmenu
  aliases: 🔘 Button & Menu Editor
  help: Edit home menu buttons
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendInlineKeyboard([{title:"⬅️ Owner Control",command:"/admin"}],"⛔ Access denied.");return;}
var menu=Bot.getProperty("home_menu_buttons");
if(!Array.isArray(menu)||!menu.length)menu=[
 {title:"🛡️ Guild Glory Credit",command:"/guild",enabled:true},
 {title:"💎 Add Funds / Deposit",command:"/deposit",enabled:true},
 {title:"👤 My Profile",command:"/profile",enabled:true},
 {title:"📦 My Orders",command:"/myorders",enabled:true},
 {title:"🛒 All Packages",command:"/packages",enabled:true},
 {title:"🎧 Live Support",command:"/support",enabled:true}
];
var msg="🔘 HOME BUTTON SETTINGS\n\n";
for(var i=0;i<menu.length;i++){var b=menu[i]||{};msg+=(i+1)+". "+(b.enabled===false?"[OFF] ":"[ON] ")+b.title+" → "+b.command+"\n";}
var buttons=[
 {title:"➕ Add Button",command:"/adminmenuadd"},
 {title:"✏️ Rename / Change Link",command:"/adminmenedit"},
 {title:"🗑️ Delete Button",command:"/adminmenudelete"},
 {title:"🔁 Enable / Disable",command:"/adminmenutoggle"},
 {title:"↩️ Reset Default",command:"/adminmenureset"},
 {title:"⬅️ Owner Control",command:"/admin"}
];
Bot.sendInlineKeyboard(buttons,msg);