/*CMD
  command: /packages
  aliases: 🛒 All Packages
  help: Browse all shop categories
CMD*/
var k = "💎 Diamond Top-Up, 🛡️ Guild Glory Credit,\n🎟️ Guild Glory Code, 📅 Weekly Membership,\n📆 Monthly Membership, 🏆 Level Up / Other Items,\n⬅️ Back to Home";
var p = Bot.getProperty("shop_packages") || [];
var msg = "🛍️ ISRAFILX PACKAGE STORE\n\n";
if (!p.length) msg += "প্যাকেজগুলো অ্যাডমিন প্যানেল থেকে যোগ করা হবে।";
else for (var i=0;i<p.length;i++){var x=p[i];msg += (i+1)+". "+x.name+" — ৳"+x.price+" | Stock: "+(x.stock||0)+"\n";}
Bot.sendKeyboard(k,msg);