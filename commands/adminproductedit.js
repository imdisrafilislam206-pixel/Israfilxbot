/*CMD
  command: /adminproductedit
  aliases: ✏️ Edit Product
  help: Edit a product
  need_reply: true
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendMessage("⛔ Access denied.");return;}
var a=String(message||"").split("|");var p=Bot.getProperty("shop_packages")||[];
var n=Number(a[0])-1;
if(a.length<5||!Array.isArray(p)||n<0||n>=p.length){Bot.sendMessage("ফরম্যাট: serial|category|name|price|stock\nউদাহরণ: 1|diamond|520 Diamonds|350|15");return;}
var price=Number(a[3]),stock=Number(a[4]);
if(!a[1].trim()||!a[2].trim()||!isFinite(price)||!isFinite(stock)||price<0||stock<0){Bot.sendMessage("❌ তথ্য সঠিক নয়।");return;}
p[n]={category:a[1].trim().toLowerCase(),name:a[2].trim(),price:price,stock:stock};
Bot.setProperty("shop_packages",p,"json");
Bot.sendInlineKeyboard([{title:"🛍️ Product Manager",command:"/adminproducts"},{title:"⬅️ Owner Control",command:"/admin"}],"✅ পণ্য আপডেট হয়েছে: "+p[n].name);