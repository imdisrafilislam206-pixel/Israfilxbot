/*CMD
  command: /myorders
  aliases: 📦 My Orders
  help: View customer orders
CMD*/
var orders = User.getProperty("my_orders") || [];
var msg = "📦 MY ORDERS\n\n";
if (!orders.length) {
  msg += "এখনো কোনো অর্ডার নেই।";
} else {
  for (var i = Math.max(0, orders.length - 10); i < orders.length; i++) {
    var o = orders[i] || {};
    msg += (i + 1) + ". " + (o.title || "Order") + " — " + (o.status || "Pending") + "\n";
  }
}
Bot.sendKeyboard("🛒 All Packages, 💰 Add Funds / Deposit,\n⬅️ Back to Home", msg);