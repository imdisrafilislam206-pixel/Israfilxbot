/*CMD
  command: requestpermission
  help: Request access from the Guild Glory owner
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/

var OWNER = "8312390543";
var uid = String(user.telegramid);
if (uid === OWNER) {
  Bot.sendMessage("✅ আপনি Owner। আপনার সব permissions চালু আছে।");
  return;
}
var p = Bot.getProperty("ffg_user_" + uid, {});
var name = (p && p.name) || user.first_name || "User";
var username = (p && p.username) ? "@" + p.username : "not set";
Bot.sendMessageToChatWithId(OWNER, "🔐 নতুন Permission Request\nনাম: " + name + "\nUsername: " + username + "\nTelegram ID: " + uid + "\n\nAdmin Panel → Permissions থেকে প্রয়োজনীয় permission দিন।");
Bot.sendMessage("✅ আপনার অনুরোধ Owner-এর কাছে পাঠানো হয়েছে। Owner অনুমতি দিলে নির্দিষ্ট সুবিধাগুলো ব্যবহার করতে পারবেন।");
