/*CMD
  command: account
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /account — authenticated FFGlory account balance
var uid=String(user.telegramid), allowed=Bot.getProperty("ffg_allowed_users",["8312390543"]);
if(!Array.isArray(allowed)||(uid!=="8312390543"&&allowed.indexOf(uid)<0)){Bot.sendMessage("⛔ Access denied.");return;}
var key=Bot.getProperty("ffg_api_key"), master=Bot.getProperty("ffg_master_key");
if(!key||!master){Bot.sendInlineKeyboard([[{title:"🔐 Set API Credentials",command:"/apisetup"}],[{title:"⬅️ Admin",command:"/admin"}]],"Owner-কে API credentials সেট করতে বলো।");return;}
HTTP.get({url:"https://ffglory.pro/api/auth/me?api_key="+encodeURIComponent(key),headers:{"x-api-key":master},success:"/accountresult",error:"/apierror"});
