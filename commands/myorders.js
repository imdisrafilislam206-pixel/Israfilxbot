/*CMD
  command: /myorders
  aliases: 📦 My Orders
  help: Show your order history and status
  answer: My orders
CMD*/
var ids = User.getProperty("my_order_ids");
if (!ids || ids.length === 0) {
  Bot.sendMessage("📦 এখনো আপনার কোনো অর্ডার নেই।");
  return;
}
var output = "📦 YOUR ORDERS\n\n";
var shown = 0;
for (var i = ids.length - 1; i >= 0 && shown < 10; i--) {
  var order = Bot.getProperty("order_" + ids[i]);
  if (!order) { continue; }
  output += "ID: " + order.id + "\nPackage: " + order.package +
    "\nPlayer ID: " + order.player_id + "\nStatus: " + order.status + "\n\n";
  shown++;
}
Bot.sendMessage(output);
