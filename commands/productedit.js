/*CMD
  command: productedit
  help: Edit product details
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/

// Owner/product manager edits a product using: ID | name | price | description
if (String(user.telegramid) !== "8312390543" && Bot.getProperty("ffg_perm_" + String(user.telegramid) + "_products", false) !== true) { Bot.sendMessage("⛔ Products permission নেই।"); return; }
var parts = String(message || "").split("|");
if (parts.length < 4) {
  Bot.sendInlineKeyboard([[{title:"⬅️ Product Management",command:"/adminproducts"}]], "পণ্য সম্পাদনার তথ্য পাঠান:\nID | নতুন নাম | নতুন দাম | নতুন বিবরণ");
  return;
}
var id=String(parts[0]).trim(), name=String(parts[1]).trim(), price=Number(String(parts[2]).trim()), description=parts.slice(3).join("|").trim();
if(!id || !name || !isFinite(price) || price<0){Bot.sendMessage("তথ্য সঠিক নয়। আবার চেষ্টা করুন: ID | নাম | দাম | বিবরণ");return;}
var products=Bot.getProperty("ffg_products",[]);
if(!Array.isArray(products))products=[];
var found=false;
for(var i=0;i<products.length;i++){
 if(String(products[i].id || i)===id){
  products[i].name=name;products[i].price=price;products[i].description=description;products[i].updated_at=new Date().toISOString();found=true;break;
 }
}
if(!found){Bot.sendMessage("এই ID-এর পণ্য পাওয়া যায়নি। /adminproducts থেকে তালিকা দেখুন।");return;}
Bot.setProperty("ffg_products",products,"json");
Bot.sendInlineKeyboard([[{title:"🛠️ Product Management",command:"/adminproducts"},{title:"🏠 Home",command:"/start"}]],"✅ পণ্যের তথ্য আপডেট হয়েছে: "+name);
