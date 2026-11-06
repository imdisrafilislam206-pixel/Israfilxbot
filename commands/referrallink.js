/*CMD
  command: referrallink
  help: Share your referral link
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/
var uid=String(user.telegramid);
var link="https://t.me/Israfilxffglory_bot?start=ref_"+uid;
Bot.sendInlineKeyboard([[{title:"🎁 রেফারেল প্যানেল",command:"/referral"},{title:"🏠 Home",command:"/start"}]],"আপনার ব্যক্তিগত Referral Link:\n"+link+"\n\nবন্ধুদের সঙ্গে শেয়ার করুন।");
