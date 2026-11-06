/*CMD
  command: account
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💰 ব্যালেন্স ও লেনদেন
  group: 
CMD*/

// /account — authenticated FFGlory account balance
var uid=String(user.telegramid);
if(uid!=="8312390543" && Bot.getProperty("ffg_perm_"+uid+"_balance",false)!==true){Bot.sendMessage("⛔ Balance permission নেই। /requestpermission");return;}
var key=Bot.getProperty("ffg_api_key"), master=Bot.getProperty("ffg_master_key");
if(!key||!master){Bot.sendInlineKeyboard([[{title:"🔐 Set API Credentials",command:"/apisetup"}],[{title:"⬅️ Admin",command:"/admin"}]],"Owner-কে API credentials সেট করতে বলো।");return;}
HTTP.get({url:"https://ffglory.pro/api/auth/me?api_key="+encodeURIComponent(key),headers:{"x-api-key":master},success:"/accountresult",error:"/apierror"});
