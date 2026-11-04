/*CMD
  command: /packages
  aliases: 🛒 All Packages
  help: Browse all shop categories
CMD*/
var p = Bot.getProperty("shop_packages") || [];
var buttons = [
 {title:"💎 Diamond Top-Up",command:"/diamond"},
 {title:"🛡️ Guild Glory Credit",command:"/guild"},
 {title:"🎟️ Guild Glory Code",command:"/codeshop"},
 {title:"⬅️ Back to Home",command:"/start"}
];
var msg = "🛍️ ISRAFILX PACKAGE STORE\n\n";
if (!p.length) msg += "প্যাকেজ এখনো যোগ করা হয়নি। Admin Panel থেকে পণ্য যোগ করা যাবে।";
else for (var i=0;i<p.length;i++){var x=p[i]||{};msg += (i+1)+". "+(x.name||"Product")+" — ৳"+(x.price||0)+" | Stock: "+(x.stock||0)+"\n";}
Bot.sendInlineKeyboard(buttons,msg);