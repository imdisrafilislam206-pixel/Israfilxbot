/*CMD
  command: groups
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📊 রিপোর্ট
  group: 
CMD*/

var uid=String(user.telegramid);
if(uid!=="8312390543" && Bot.getProperty("ffg_perm_"+uid+"_reports",false)!==true){Bot.sendMessage("⛔ এই Reports ফিচারের অনুমতি নেই। Owner-এর কাছে অনুরোধ পাঠান: /requestpermission");return;}

// /groups — list groups
 var key=Bot.getProperty("ffg_api_key"),master=Bot.getProperty("ffg_master_key");
if(!key||!master){Bot.sendMessage("Owner-কে API credentials সেট করতে বলো।");return;}
HTTP.get({url:"https://ffglory.pro/api/client/my-groups?api_key="+encodeURIComponent(key),headers:{"x-api-key":master},success:"/groupsresult",error:"/apierror"});
