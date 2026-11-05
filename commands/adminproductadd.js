/*CMD
  command: /adminproductadd
  aliases: ➕ Add Product
  help: Add a product
  need_reply: true
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendMessage("⛔ Access denied.");return;}
var a=String(message||"").split("|");
if(a.length<4){Bot.sendMessage("ফরম্যাট: category|product name|price|stock\nউদাহরণ: diamond|100 Diamonds|90|20");return;}
var item={category:a[0].trim().toLowerCase(),name:a[1].trim(),price:Number(a[2]),stock:Number(a[3])};
if(!item.category||!item.name||!isFinite(item.price)||!isFinite(item.stock)||item.price<0||item.stock<0){Bot.sendMessage("❌ তথ্য সঠিক নয়। আবার Add Product চাপুন।");return;}
var p=Bot.getProperty("shop_packages")||[];if(!Array.isArray(p))p=[];
p.push(item);Bot.setProperty("shop_packages",p,"json");
Bot.sendInlineKeyboard([{title:"🛍️ Product Manager",command:"/adminproducts"},{title:"⬅️ Owner Control",command:"/admin"}],"✅ পণ্য যোগ হয়েছে: "+item.name+" | ৳"+item.price+" | Stock "+item.stock);