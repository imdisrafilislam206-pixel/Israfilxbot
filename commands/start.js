/*CMD
  command: /start
  help: Open ISRAFILXSHOP
  answer: Welcome to ISRAFILXSHOP
CMD*/
var name = user.first_name || "বন্ধু";
var buttons = [
  [{title:"🛒 সব প্যাকেজ",command:"/packages"},{title:"💎 ডায়মন্ড",command:"/diamonds"}],
  [{title:"👑 Guild Glory",command:"/guildglory"},{title:"🎟️ কোড শপ",command:"/codeshop"}],
  [{title:"💳 ডিপোজিট",command:"/deposit"},{title:"💰 আমার ওয়ালেট",command:"/wallet"}],
  [{title:"📦 আমার অর্ডার",command:"/myorders"},{title:"💬 প্রাইভেট সাপোর্ট",command:"/support"}],
  [{title:"📢 চ্যানেল ও গ্রুপ",command:"/community"},{title:"ℹ️ সাহায্য",command:"/help"}]
];
Bot.sendInlineKeyboard(buttons,"👑 স্বাগতম "+name+"!\n\n🛍️ ISRAFILXSHOP\n🎮 Free Fire Top-Up & Digital Items\n\nনিচের বাটনে চাপ দিয়ে আপনার প্রয়োজনীয় সেবা বেছে নিন।");
