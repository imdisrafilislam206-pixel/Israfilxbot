/*CMD
  command: referral
  help: Personal referral link and statistics
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases: 🎁 রেফার করুন, 🔗 রেফারেল
  group:
CMD*/

var uid=String(user.telegramid);
var profile=Bot.getProperty("ffg_user_"+uid,{});
if(!profile || typeof profile!=="object") profile={};
var link="https://t.me/Israfilxffglory_bot?start=ref_"+uid;
var referrals=Bot.getProperty("ffg_referrals_"+uid,[]);
if(!Array.isArray(referrals)) referrals=[];
var joined=0;
for(var i=0;i<referrals.length;i++){
 var p=Bot.getProperty("ffg_user_"+String(referrals[i]),{});
 if(p && p.referral_qualified===true) joined++;
}
var bonus=Number(Bot.getProperty("ffg_referral_bonus",0));
var earned=Number(Bot.getProperty("ffg_referral_earned_"+uid,0));
Bot.sendInlineKeyboard([
 [{title:"📋 আমার রেফারেল লিংক",command:"/referrallink"}],
 [{title:"📊 রেফারেল তালিকা",command:"/referrallist"}],
 [{title:"🏠 মূল মেনু",command:"/start"}]
],"🎁 GUILD GLORY REFERRAL\n\nআপনার লিংক:\n"+link+"\n\nমোট রেফার: "+referrals.length+" জন\nযোগ্য রেফার: "+joined+" জন\nবোনাসের নিয়ম: ৳"+bonus+" (প্রতি যোগ্য রেফারেল)\nআপনার জমা বোনাস: ৳"+earned+"\n\nনোট: পেমেন্ট ও অর্ডার যাচাই ব্যবস্থা সম্পূর্ণ না হওয়া পর্যন্ত বোনাস স্বয়ংক্রিয়ভাবে দেওয়া হবে না।");
