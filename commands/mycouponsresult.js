/*CMD
  command: mycouponsresult
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /mycouponsresult
var a;try{a=typeof content==="string"?JSON.parse(content):content;}catch(e){Bot.sendMessage("Coupon response invalid.");return;}
if(!Array.isArray(a)){Bot.sendMessage("FFGlory: "+((a&&a.error)||"Coupons পাওয়া যায়নি"));return;}
var s="🎟️ *MY COUPONS*\n\n";for(var i=0;i<a.length&&i<60;i++){var c=a[i];s+=(i+1)+". "+c.code+"\nStatus: "+c.status+"\nBasic: "+c.basic_credits+" | Premium: "+c.premium_credits+"\n\n";}
Bot.sendInlineKeyboard([[{title:"⬅️ Coupon Menu",command:"/coupons"}]],s);
