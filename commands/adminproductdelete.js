/*CMD
  command: /adminproductdelete
  aliases: 🗑️ Delete Product
  help: Delete a product
  need_reply: true
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendMessage("⛔ Access denied.");return;}
var n=Number(String(message||"").trim())-1;var p=Bot.getProperty("shop_packages")||[];
if(!Array.isArray(p)||n<0||n>=p.length){Bot.sendMessage("সঠিক সিরিয়াল লিখুন। Product Manager-এ তালিকা দেখে সিরিয়াল দিন।");return;}
var gone=p.splice(n,1)[0];Bot.setProperty("shop_packages",p,"json");
Bot.sendInlineKeyboard([{title:"🛍️ Product Manager",command:"/adminproducts"},{title:"⬅️ Owner Control",command:"/admin"}],"🗑️ পণ্য মুছে ফেলা হয়েছে: "+gone.name);