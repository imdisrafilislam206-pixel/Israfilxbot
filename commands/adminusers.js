/*CMD
  command: /adminusers
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /adminusers — owner only
if (String(user.telegramid) !== "8312390543") { Bot.sendMessage("⛔ Owner only."); return; }
var users = Bot.getProperty("ffg_all_users", []);
var allowed = Bot.getProperty("ffg_allowed_users", ["8312390543"]);
if (!Array.isArray(users)) users = [];
if (!Array.isArray(allowed)) allowed = ["8312390543"];
var out = "👥 *USER REGISTER*\nTotal started: " + users.length + "\nApproved: " + allowed.length + "\n\n";
for (var i=0; i<users.length && i<80; i++) {
 var id = String(users[i]); var p = Bot.getProperty("ffg_user_" + id, {});
 out += (i+1) + ". " + (p.name || "Unknown") + (p.username ? " (@" + p.username + ")" : "") + "\nID: " + id + "\nAccess: " + (allowed.indexOf(id)>=0 ? "✅ Allowed" : "⛔ Blocked") + "\n\n";
}
Bot.sendInlineKeyboard([[{title:"➕ Allow User",command:"/allowuser"},{title:"➖ Remove User",command:"/removeuser"}],[{title:"⬅️ Admin",command:"/admin"}]], out);
