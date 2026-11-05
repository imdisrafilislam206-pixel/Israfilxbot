/*CMD
  command: pricingresult
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /pricingresult
var d;try{d=typeof content==="string"?JSON.parse(content):content;}catch(e){Bot.sendMessage("Pricing response invalid.");return;}
if(!d||d.error){Bot.sendMessage("Pricing পাওয়া যায়নি।");return;}
var s="🌍 *REGION & PRICING*\nBasic: $"+d.basic_credit_usd+" / credit\nPremium: $"+d.premium_credit_usd+" / credit\n\n";
var b=[];for(var i=0;i<(d.regions||[]).length;i++){var r=d.regions[i];s+=r.id+" — "+r.region_name+" | Tier: "+r.tier+" | "+(r.enabled?"Enabled":"Disabled")+"\n";if(r.enabled)b.push([{title:"🌍 "+r.region_name+" ("+r.id+")",command:"/launch "+r.id}]);}
b.push([{title:"🏠 Home",command:"/start"}]);Bot.sendInlineKeyboard(b,s);
