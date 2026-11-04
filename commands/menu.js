/*CMD
  command: /menu
  help: Show clickable shop menu
  answer: ISRAFILXSHOP Menu
CMD*/
var buttons = [
  [{title:"🛒 সব প্যাকেজ",command:"/packages"},{title:"💎 ডায়মন্ড",command:"/diamonds"}],
  [{title:"👑 Guild Glory",command:"/guildglory"},{title:"🎟️ কোড শপ",command:"/codeshop"}],
  [{title:"💳 ডিপোজিট",command:"/deposit"},{title:"💰 আমার ওয়ালেট",command:"/wallet"}],
  [{title:"📦 আমার অর্ডার",command:"/myorders"},{title:"💬 প্রাইভেট সাপোর্ট",command:"/support"}],
  [{title:"🏠 Home",command:"/start"}]
];
Bot.sendInlineKeyboard(buttons,"✨ ISRAFILXSHOP — মেইন মেনু\n\nএকটি অপশন বেছে নিন:");
