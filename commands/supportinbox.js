/*CMD
  command: supportinbox
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💬 সাপোর্ট ইনবক্স
  group: 
CMD*/

// /supportinbox — owner-only overview of latest private support messages.
var OWNER = "8312390543";
if (String(user.telegramid) !== OWNER) { Bot.sendMessage("⛔ Owner only."); return; }
var users = Bot.getProperty("ffg_all_users", []);
if (!Array.isArray(users)) users = [];
var buttons = [];
var summary = "💬 *SUPPORT INBOX*\n\n";
var found = 0;
for (var i=0; i<users.length; i++) {
  var id = String(users[i]);
  var thread = Bot.getProperty("ffg_support_" + id, []);
  if (!Array.isArray(thread) || thread.length === 0) continue;
  var last = thread[thread.length - 1];
  summary += "• " + id + " — " + String(last.text || "").substring(0, 70) + "\n";
  buttons.push([{title:"Reply: " + id, command:"/adminreply " + id}]);
  found++;
  if (found >= 20) break;
}
if (!found) { Bot.sendMessage("এখনো কোনো Support message আসেনি।"); return; }
buttons.push([{title:"👑 Admin Panel",command:"/admin"}]);
Bot.sendInlineKeyboard(buttons, summary);
