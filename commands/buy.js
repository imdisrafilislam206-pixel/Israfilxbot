/*CMD
  command: /buy
  help: Submit a new order for admin approval
  answer: Send order details
  need_reply: true
CMD*/
var orderText = (message || "").trim();
var parts = orderText.split("|");
if (parts.length < 3) {
  Bot.sendMessage("❌ তথ্যের ফরম্যাট ঠিক হয়নি। আবার /buy লিখে এভাবে পাঠান:\nPackage name | Free Fire Player ID | Server | Transaction ID অথবা NONE\n\nউদাহরণ:\n200 Likes - 1 Day | 123456789 | BD | NONE");
  return;
}
var packageName = parts[0].trim();
var playerId = parts[1].trim();
var server = parts[2].trim();
var trxId = parts.length > 3 ? parts.slice(3).join("|").trim() : "NONE";
if (!packageName || !playerId || !server || packageName.length > 80 || playerId.length > 30 || server.length > 30 || trxId.length > 100) {
  Bot.sendMessage("❌ কোনো তথ্য ফাঁকা বা অতিরিক্ত বড় হয়েছে। /buy দিয়ে আবার সঠিকভাবে পাঠান।");
  return;
}
var orderId = String(Date.now());
var order = {
  id: orderId,
  user_id: String(user.telegramid),
  username: user.username || "",
  first_name: user.first_name || "",
  package: packageName,
  player_id: playerId,
  server: server,
  transaction_id: trxId || "NONE",
  status: "PENDING",
  created_at: new Date().toISOString()
};
Bot.setProperty("order_" + orderId, order, "json");
var ids = User.getProperty("my_order_ids");
if (!ids) { ids = []; }
ids.push(orderId);
User.setProperty("my_order_ids", ids, "json");
var pending = Bot.getProperty("pending_order_ids");
if (!pending) { pending = []; }
pending.push(orderId);
Bot.setProperty("pending_order_ids", pending, "json");
var adminId = "8312390543";
var adminMessage = "🆕 NEW ORDER — PENDING\n\nOrder ID: " + orderId +
  "\nCustomer: " + order.first_name + " (@"(� order.username + ")" +
  "\nTelegram ID: " + order.user_id +
  "\nPackage: " + packageName +
  "\nPlayer ID: " + playerId +
  "\nServer: " + server +
  "\nTransaction ID: " + order.transaction_id +
  "\n\nApprove: /approve " + orderId +
  "\nReject: /reject " + orderId;
Bot.sendMessageToChatWithId(adminId, adminMessage);
