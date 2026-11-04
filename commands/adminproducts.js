/*CMD
  command: /adminproducts
  aliases: 🛍️ Product & Price
  help: Root admin product manager
  need_reply: true
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendInlineKeyboard([{title:"⬅️ Owner Control",command:"/admin"}],"⛔ Access denied.");return;}
var p=Bot.getProperty("shop_packages")||[];
var raw=String(message||"").trim();
var parts=raw.split("|");
var action=(parts[0]||"").toLowerCase().trim();
if(action==="add" && parts.length>=5){
 var item={category:parts[1].trim().toLowerCase(),name:parts[2].trim(),price:Number(parts[3]),stock:Number(parts[4])};
 if(!item.name||!isFinite(item.price)||!isFinite(item.stock)||item.price<0||item.stock<0){Bot.sendMessage("❌ তথ্য সঠিক নয়।");return;}
 p.push(item);Bot.setProperty("shop_packages",p,"json");Bot.sendMessage("✅ পণ্য যোগ হয়েছে: "+item.name);
}else if(action==="delete"&&parts.length>=2){
 var idx=Number(parts[1])-1;if(idx<0||idx>=p.length){Bot.sendMessage("❌ সিরিয়াল পাওয়া যায়নি।");return;}var removed=p.splice(idx,1);Bot.setProperty("shop_packages",p,"json");Bot.sendMessage("🗑️ মুছে ফেলা হয়েছে: "+removed[0].name);
}else if(action==="edit"&&parts.length>=5){
 var n=Number(parts[1])-1;if(n<0||n>=p.length){Bot.sendMessage("❌ সিরিয়াল পাওয়া যায়নি।");return;}
 p[n]={category:parts[2].trim().toLowerCase(),name:parts[3].trim(),price:Number(parts[4]),stock:parts.length>5?Number(parts[5]):p[n].stock};
 Bot.setProperty("shop_packages",p,"json");Bot.sendMessage("✅ পণ্য আপডেট হয়েছে।");
}else{
 var list="বর্তমান পণ্য:\n";if(!p.length)list+="কোনো পণ্য নেই।\n";else for(var i=0;i<p.length;i++){var x=p[i]||{};list+=(i+1)+". "+x.name+" | "+x.category+" | ৳"+x.price+" | Stock "+x.stock+"\n";}
 Bot.sendMessage(list+"\nনির্দেশনা (এক লাইনে):\nadd|category|name|price|stock\nedit|serial|category|name|price|stock\ndelete|serial");
}
Bot.sendInlineKeyboard([{title:"⬅️ Owner Control",command:"/admin"},{title:"🏠 Home",command:"/start"}],"🛍️ Product Manager");
