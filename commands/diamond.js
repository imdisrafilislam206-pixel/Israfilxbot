/*CMD
  command: /diamond
  aliases: 💎 Diamond Top-Up
  help: Diamond top-up category
CMD*/
var p = Bot.getProperty("shop_packages") || [];
var msg = "💎 DIAMOND TOP-UP\n\n";
var count=0;
for(var i=0;i<p.length;i++){var x=p[i]||{};if(String(x.category||"").toLowerCase()==="diamond"){count++;msg+=count+". "+x.name+" — ৳"+x.price+" | Stock: "+(x.stock||0)+"\n";}}
if(!count) msg += "ডায়মন্ড প্যাকেজ এখনো যোগ করা হয়নি।";
Bot.sendInlineKeyboard([{title:"🛒 All Packages",command:"/packages"},{title:"🎧 Contact Admin",command:"/support"},{title:"⬅️ Back to Home",command:"/start"}],msg);