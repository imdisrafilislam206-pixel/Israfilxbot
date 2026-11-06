/*CMD
  command: referraladmin
  help: Configure referral bonus
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendMessage("⛔ শুধু Owner এই সেটিংস পরিবর্তন করতে পারবেন।");return;}
var raw=String(message||"").trim();
if(!raw){
 var current=Number(Bot.getProperty("ffg_referral_bonus",0));
 Bot.sendInlineKeyboard([[{title:"⬅️ Admin Panel",command:"/admin"}]],"বর্তমান রেফারেল বোনাস: ৳"+current+"\nনতুন বোনাসের পরিমাণ শুধু সংখ্যা হিসেবে পাঠান। বন্ধ করতে 0 পাঠান।");
 return;
}
var amount=Number(raw);
if(!isFinite(amount)||amount<0){Bot.sendMessage("সঠিক সংখ্যা পাঠান।");return;}
Bot.setProperty("ffg_referral_bonus",amount,"float");
Bot.sendInlineKeyboard([[{title:"🎁 Referral Panel",command:"/referral"},{title:"👑 Admin",command:"/admin"}]],"✅ রেফারেল বোনাসের নিয়ম সেট হয়েছে: ৳"+amount+" প্রতি যোগ্য রেফারেল।\nপেমেন্ট যাচাই সংযুক্ত না হওয়া পর্যন্ত স্বয়ংক্রিয় বোনাস বিতরণ বন্ধ থাকবে।");
