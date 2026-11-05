// /redeemedcoupons
var k=Bot.getProperty("ffg_api_key"),m=Bot.getProperty("ffg_master_key");if(!k||!m){Bot.sendMessage("API credentials সেট করা নেই।");return;}
HTTP.get({url:"https://ffglory.pro/api/client/redeemed-coupons?api_key="+encodeURIComponent(k),headers:{"x-api-key":m},success:"/redeemedcouponsresult",error:"/apierror"});
