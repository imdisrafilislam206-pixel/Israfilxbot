/*CMD
  command: /reply
  help: Reply privately to a customer
  answer: /reply USER_CHAT_ID আপনার মেসেজ
CMD*/
var ADMIN_ID = "8312390543";
if (String(user.telegramid) !== ADMIN_ID) {
  Bot.sendMessage("⛔ এই অপশনটি শুধু মূল Admin ব্যবহার করতে পারবেন।");
  return;
}
var raw = String(params || "").trim();
var parts = raw.split(" ");
var target = parts.shift();
var replyText = parts.join(" ").trim();
if (!target || !/^\d+$/.test(target) || !replyText) {
  Bot.sendMessage("ব্যবহার: /reply USER_CHAT_ID আপনার উত্তর\nউদাহরণ: /reply 123456789 আপনার অর্ডারটি দেখছি।");
  return;
}
Bot.sendMessageToChatWithId(target, "👑 ISRAFILXSHOP Admin-এর ব্যক্তিগত উত্তর:\n\n" + replyText);
Bot.sendMessage("✅ উত্তরটি কাস্টমারের প্রাইভেট চ্যাটে পাঠানো হয়েছে।");
