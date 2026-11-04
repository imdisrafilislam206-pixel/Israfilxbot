/*CMD
  command: /reject
  help: Reject an order
  answer: Reject order
CMD*/
var ADMIN_ID = "8312390543";
if (String(user.telegramid) !== ADMIN_ID) {
  Bot.sendMessage("⛔ শুধু Admin এই কমান্ড ব্যবহার করতে পারবেন।");
  return;
}
var orderId = (params || "").trim().split(" ")[0];
if (!orderId) {
  Bot.sendMessage("ব্যবহার: /reject ORDER_ID");
  return;
}
var order = Bot.getProperty("order_" + orderId);
if (!order) {
  Bot.sendMessage("❌ এই Order ID পাওয়া যায়নি।");
  return;
}
if (order.status !== "PENDING") {
  Bot.sendMessage("ℹ️ এই অর্ডারের বর্তমান Status: " + order.status);
  return;
}
order.status = "REJECTED";
order.rejected_at = new Date().toISOString();
order.rejected_by = String(user.telegramid);
Bot.setProperty("order_" + orderId, order, "json");
var pending = Bot.getProperty("pending_order_ids") || [];
var updated = [];
for (var i = 0; i < pending.length; i++) {
  if (String(pending[i]) !== String(orderId)) { updated.push(pending[i]); }
}
Bot.setProperty("pending_order_ids", updated, "json");
Bot.sendMessageToChatWithId(order.user_id, "❌ দুঃখিত, আপনার অর্ডারটি Admin Reject করেছেন।\nOrder ID: " + orderId + "\nবিস্তারিত জানতে /support-এ যোগাযোগ করুন।");
Bot.sendMessage("❌ Order " + orderId + " Reject করা হয়েছে।");
