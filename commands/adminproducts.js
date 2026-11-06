/*CMD
command: /adminproducts
help: Owner product management
need_reply: false
aliases: 🛠️ পণ্য ম্যানেজ, 🛍️ প্রোডাক্ট ম্যানেজমেন্ট
CMD*/
if(String(user.telegramid)!=="8312390543"&&Bot.getProperty("ffg_perm_"+String(user.telegramid)+"_products",false)!==true){Bot.sendMessage("⛔ Products permission নেই।");return;}
var products=Bot.getProperty("ffg_products",[]);
if(!Array.isArray(products))products=[];
var msg="🛠️ PRODUCT MANAGEMENT\nমোট পণ্য: "+products.length+"\n\n";
for(var i=0;i<products.length&&i<30;i++){
 var p=products[i]||{};
 msg+=(i+1)+". "+String(p.name||"Unnamed")+" | ৳"+String(p.price||0)+" | "+(p.active===false?"বন্ধ":"চালু")+"\n";
}
Bot.sendKeyboard("➕ নতুন পণ্য যোগ করুন, 🛍️ Guild Glory Store,\n⬅️ Admin, 🏠 মূল মেনু",msg+"\nপণ্য যোগ করতে বাটন চাপুন। সম্পাদনার জন্য নির্দিষ্ট পণ্যের ID-সহ /productedit ব্যবহার করা যাবে।");