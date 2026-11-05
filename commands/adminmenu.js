/*CMD
  command: /adminmenu
  aliases: 🔘 Button & Menu Editor
  help: Edit home menu buttons
  need_reply: true
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendInlineKeyboard([{title:"⬅️ Owner Control",command:"/admin"}],"⛔ Access denied.");return;}
var menu=Bot.getProperty("home_menu_buttons");
if(!Array.isArray(menu)||!menu.length) menu=[
 {title:"🛡️ Guild Glory Credit",command:"/guild",enabled:true},
 {title:"💎 Add Funds / Deposit",command:"/deposit",enabled:true},
 {title:"👤 My Profile",command:"/profile",enabled:true},
 {title:"📦 My Orders",command:"/myorders",enabled:true},
 {title:"🛒 All Packages",command:"/packages",enabled:true},
 {title:"🎧 Live Support",command:"/support",enabled:true}
];
var raw=String(message||"").trim();
var a=raw.split("|");
var action=(a[0]||"").toLowerCase().trim();
var allowed=["/guild","/deposit","/profile","/myorders","/packages","/support","/diamond","/codeshop"];
var note="";
if(action==="add"&&a.length>=3){
 var title=a[1].trim(),cmd=a[2].trim();
 if(!title||allowed.indexOf(cmd)<0){note="❌ বাটনের নাম বা গন্তব্য ঠিক নয়।";}else{menu.push({title:title,command:cmd,enabled:true});note="✅ নতুন বাটন যোগ হয়েছে।";}
}else if(action==="edit"&&a.length>=4){
 var idx=Number(a[1])-1,nt=a[2].trim(),nc=a[3].trim();
 if(idx<0||idx>=menu.length||!nt||allowed.indexOf(nc)<0)note="❌ সিরিয়াল/নাম/গন্তব্য ঠিক নয়।";
 else{menu[idx].title=nt;menu[idx].command=nc;menu[idx].enabled=true;note="✅ বাটন আপডেট হয়েছে।";}
}else if(action==="delete"&&a.length>=2){
 var di=Number(a[1])-1;if(di<0||di>=menu.length)note="❌ সিরিয়াল পাওয়া যায়নি.";else{var gone=menu.splice(di,1);note="🗑️ বাটন মুছে ফেলা হয়েছে: "+gone[0].title;}
}else if(action==="toggle"&&a.length>=2){
 var ti=Number(a[1])-1;if(ti<0||ti>=menu.length)note="❌ সিরিয়াল পাওয়া যায়নি.";else{menu[ti].enabled=menu[ti].enabled===false;note="✅ বাটনের অবস্থা বদলানো হয়েছে।";}
}else if(action==="reset"){
 menu=[
 {title:"🛡️ Guild Glory Credit",command:"/guild",enabled:true},
 {title:"💎 Add Funds / Deposit",command:"/deposit",enabled:true},
 {title:"👤 My Profile",command:"/profile",enabled:true},
 {title:"📦 My Orders",command:"/myorders",enabled:true},
 {title:"🛒 All Packages",command:"/packages",enabled:true},
 {title:"🎧 Live Support",command:"/support",enabled:true}
 ];note="↩️ ডিফল্ট বাটন ফিরিয়ে আনা হয়েছে।";
}else if(action!=="list"&&raw){note="❌ কমান্ড বুঝতে পারিনি। নিচের ফরম্যাট ব্যবহার করুন।";}
Bot.setProperty("home_menu_buttons",menu,"json");
var list="🔘 HOME BUTTON SETTINGS\n\n";
for(var i=0;i<menu.length;i++){var b=menu[i]||{};list+=(i+1)+". "+(b.enabled===false?"[OFF] ":"[ON] ")+b.title+" → "+b.command+"\n";}
list+="\n"+note+"\n\nনির্দেশনা:\nadd|নাম|/command\nedit|serial|নতুন নাম|/command\ndelete|serial\ntoggle|serial\nreset";
Bot.sendMessage(list);
Bot.sendInlineKeyboard([{title:"⬅️ Owner Control",command:"/admin"},{title:"🏠 Home",command:"/start"}],"🔧 Button Editor");
