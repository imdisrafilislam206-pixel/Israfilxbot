/*CMD
  command: /pending
  help: List pending orders (admin only)
  answer: Pending orders
CMD*/
var ADMIN_ID = "8312390543";
if (String(user.telegramid) !== ADMIN_ID) {
  Bot.sendMessage("⛔ শুধু Admin এই কমান্ড ব্যবহার করতে পারবেন।");
  return;
}
var ids = Bot.getProperty("pending_order_ids");
if (!ids || ids.length === 0) {
  Bot.sendMessage("✅ কোনো Pending order নেই।");
  return;
}
var output = "🕒 PENDING ORDERS (সর্বশেষ 10টি)\n\n";
var shown = 0;
for (var i = ids.length - 1; i >= 0 && shown < 10; i--) {
  var order = Bot.getProperty("order_" + ids[i]);
  if (!order || order.status !== "PENDING") { continue; }
  output += "ID: " + order.id + "\n" + order.package +
    "\nPlayer ID: " + order.player_id + " | Server: " + order.server +
    "\nApprove: /approve " + order.id +
    "\nReject: /reject " + order.id + "\n\n";
  shown++;
}
Bot.sendMessage(output);
