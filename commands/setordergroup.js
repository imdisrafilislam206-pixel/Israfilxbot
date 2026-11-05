/*CMD
  command: setordergroup
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /setordergroup — set NEED_REPLY: true. Owner enters Telegram group chat ID (recommended).
var OWNER = "8312390543";
if (String(user.telegramid) !== OWNER) { Bot.sendMessage("⛔ Owner only."); return; }
var id = String(message || "").trim();
if (!/^-100\d{8,15}$/.test(id) && !/^@([A-Za-z0-9_]{5,})$/.test(id)) {
  Bot.sendMessage("গ্রুপের numeric ID (সাধারণত -100 দিয়ে শুরু) অথবা public @username পাঠাও। Private invite link নয়।");
  return;
}
Bot.setProperty("ffg_order_group", id, "string");
Bot.sendMessage("✅ Order/Deposit notification group সেট করা হয়েছে: " + id + "\nবটকে ওই গ্রুপে যোগ করে মেসেজ পাঠানোর অনুমতি দিতে হবে।");
