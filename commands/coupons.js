/*CMD
  command: coupons
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var uid=String(user.telegramid);
if(uid!=="8312390543" && Bot.getProperty("ffg_perm_"+uid+"_products",false)!==true){Bot.sendMessage("⛔ Products permission নেই। /requestpermission");return;}

// /coupons — coupon management menu
 Bot.sendInlineKeyboard([
 [{title:"📤 My Coupons",command:"/mycoupons"},{title:"📥 Redeemed Coupons",command:"/redeemedcoupons"}],
 [{title:"🎟️ Create Coupon",command:"/createcoupon"},{title:"♻️ Redeem Coupon",command:"/redeemcoupon"}],
 [{title:"❌ Cancel Coupon",command:"/cancelcoupon"}],
 [{title:"🏠 Home",command:"/start"}]
],"🎟️ *COUPON CENTER*\nএকটি অপশন নির্বাচন করো।");
