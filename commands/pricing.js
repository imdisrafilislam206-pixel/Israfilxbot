/*CMD
  command: pricing
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /pricing — public regions and credit prices
HTTP.get({url:"https://ffglory.pro/api/pricing",success:"/pricingresult",error:"/apierror"});
