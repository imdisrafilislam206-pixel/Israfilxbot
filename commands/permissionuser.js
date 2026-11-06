/*CMD
  command: permissionuser
  help: Select user for permission settings
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/

if (String(user.telegramid) !== "8312390543") { Bot.sendMessage("⛔ শুধু Owner permission দিতে পারবেন।"); return; }
var id = String(message || "").trim();
if (!/^\d{5,15}$/.test(id)) { Bot.sendMessage("সঠিক Telegram ID পাঠান।"); return; }
if (id === "8312390543") { Bot.sendMessage("Owner-এর সব permissions আগে থেকেই চালু।"); return; }
Bot.setProperty("ffg_permission_target", id, "string");
Bot.runCommand("/permissions " + id);
