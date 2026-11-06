/*CMD
  command: permissions
  help: Manage per-user permissions
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
  group:
CMD*/

var OWNER = "8312390543";
if (String(user.telegramid) !== OWNER) { Bot.sendMessage("⛔ শুধু Owner permission পরিচালনা করতে পারবেন।"); return; }
var id = String(message || "").trim();
if (!/^\d{5,15}$/.test(id)) { Bot.sendMessage("সঠিক Telegram numeric ID পাঠান।"); return; }
if (id === OWNER) { Bot.sendMessage("✅ Owner-এর সব permissions স্থায়ীভাবে চালু আছে; এগুলো বন্ধ করা যাবে না।"); return; }
Bot.setProperty("ffg_permission_target", id, "string");
var keys = ["admin","products","orders","users","balance","group_post","support","api","reports"];
var labels = ["Admin Panel","Products","Orders","User Management","Balance & Transactions","Group Post","Customer Support","API Settings","Reports"];
var lines = "🔐 PERMISSION MANAGER\nUser ID: " + id + "\n\n";
var keyboard = "";
for (var i=0;i<keys.length;i++) {
  var on = Bot.getProperty("ffg_perm_" + id + "_" + keys[i], false) === true;
  lines += (on ? "✅ " : "❌ ") + labels[i] + "\n";
  keyboard += (on ? "❌ " : "✅ ") + labels[i] + "\n";
}
keyboard += "⬅️ Admin";
Bot.sendKeyboard(keyboard, lines + "\nএকটি permission-এর নাম চাপলে সেটি ON/OFF হবে।");
