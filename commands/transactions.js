// /transactions — recent 50 transactions
var uid=String(user.telegramid),a=Bot.getProperty("ffg_allowed_users",["8312390543"]);
if(!Array.isArray(a)||(uid!=="8312390543"&&a.indexOf(uid)<0)){Bot.sendMessage("⛔ Access denied.");return;}
var k=Bot.getProperty("ffg_api_key"),m=Bot.getProperty("ffg_master_key");if(!k||!m){Bot.sendMessage("API credentials সেট করা নেই।");return;}
HTTP.get({url:"https://ffglory.pro/api/client/transactions?api_key="+encodeURIComponent(k),headers:{"x-api-key":m},success:"/transactionsresult",error:"/apierror"});
