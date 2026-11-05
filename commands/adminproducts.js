/*CMD
  command: /adminproducts
  aliases: 🛍️ Product & Price
  help: Root admin product manager
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendInlineKeyboard([{title:"⬅️ Owner Control",command:"/admin"}],"⛔ Access denied.");return;}
var p=Bot.getProperty("shop_packages")||[];
var msg="🛍️ PRODUCT & PRICE MANAGER\n\n";
if(!p.length)msg+="এখনো কোনো পণ্য যোগ করা হয়নি।";
else for(var i=0;i<p.length;i++){var x=p[i]||{};msg+=(i+1)+". "+(x.name||"Unnamed")+"\nCategory: "+(x.category||"-")+" | Price: ৳"+(x.price||0)+" | Stock: "+(x.stock||0)+"\n\n";}
var buttons=[
 {title:"➕ Add Product",command:"/adminproductadd"},
 {title:"✏️ Edit Product",command:"/adminproductedit"},
 {title:"🗑️ Delete Product",command:"/adminproductdelete"},
 {title:"⬅️ Owner Control",command:"/admin"}
];
Bot.sendInlineKeyboard(buttons,msg);