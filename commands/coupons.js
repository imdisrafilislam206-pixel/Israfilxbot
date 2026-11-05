// /coupons — coupon management menu
var uid=String(user.telegramid),a=Bot.getProperty("ffg_allowed_users",["8312390543"]);
if(!Array.isArray(a)||(uid!=="8312390543"&&a.indexOf(uid)<0)){Bot.sendMessage("⛔ Access denied.");return;}
Bot.sendInlineKeyboard([
 [{title:"📤 My Coupons",command:"/mycoupons"},{title:"📥 Redeemed Coupons",command:"/redeemedcoupons"}],
 [{title:"🎟️ Create Coupon",command:"/createcoupon"},{title:"♻️ Redeem Coupon",command:"/redeemcoupon"}],
 [{title:"❌ Cancel Coupon",command:"/cancelcoupon"}],
 [{title:"🏠 Home",command:"/start"}]
],"🎟️ *COUPON CENTER*\nএকটি অপশন নির্বাচন করো।");
