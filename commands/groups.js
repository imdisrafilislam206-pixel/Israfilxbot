/*CMD
  command: groups
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /groups — list groups
var uid=String(user.telegramid),a=Bot.getProperty("ffg_allowed_users",["8312390543"]);
if(!Array.isArray(a)||(uid!=="8312390543"&&a.indexOf(uid)<0)){Bot.sendMessage("⛔ Access denied.");return;}
var key=Bot.getProperty("ffg_api_key"),master=Bot.getProperty("ffg_master_key");
if(!key||!master){Bot.sendMessage("Owner-কে API credentials সেট করতে বলো।");return;}
HTTP.get({url:"https://ffglory.pro/api/client/my-groups?api_key="+encodeURIComponent(key),headers:{"x-api-key":master},success:"/groupsresult",error:"/apierror"});
