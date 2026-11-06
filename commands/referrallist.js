/*CMD
  command: referrallist
  help: Referral list
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/
var uid=String(user.telegramid);
var ids=Bot.getProperty("ffg_referrals_"+uid,[]);
if(!Array.isArray(ids))ids=[];
var out="👥 আপনার রেফারেল তালিকা\nমোট: "+ids.length+"\n\n";
for(var i=0;i<ids.length&&i<50;i++){
 var p=Bot.getProperty("ffg_user_"+String(ids[i]),{});
 out+=(i+1)+". "+String(p.name||"Telegram User")+" — ID: "+ids[i]+" — "+(p.referral_qualified===true?"যোগ্য":"অপেক্ষমাণ")+"\n";
}
Bot.sendInlineKeyboard([[{title:"⬅️ Referral",command:"/referral"},{title:"🏠 Home",command:"/start"}]],out);
