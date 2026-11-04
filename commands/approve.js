/*CMD
  command: /approve
  help: Approve an order after manual checks
  answer: Approve order
CMD*/
var ADMIN_ID = "8312390543";
if (String(user.telegramid) !== ADMIN_ID) {
  Bot.sendMessage("⛔ শুধু Admin এই কমান্ড ব্যবহার করতে পারবেন।");
  return;
}
var orderId = (params || "").trim().split(" ")[0];
if (!orderId) {
  Bot.sendMessage("ব্যবহার: /approve ORDER_ID");
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
order.status = "APPROVED";
order.approved_at = new Date().toISOString();
order.approved_by = String(user.telegramid);
Bot.setProperty("order_" + orderId, order, "json");
var pending = Bot.getProperty("pending_order_ids") || [];
var updated = [];
for (var i = 0; i < pending.length; i++) {
  if (String(pending[i]) !== String(orderId)) { updated.push(pending[i]); }
}
Bot.setProperty("pending_order_ids", updated, "json");
Bot.sendMessageToChatWithId(order.user_id, "✅ আপনার অর্ডার APPROVED হয়েছে।\nOrder ID: " + orderId + "\nAdmin হাতে সার্ভিস সম্পন্ন করবেন।");
Bot.sendMessage("✅ Order " + orderId + " Approved হয়েছে। এখন সার্ভিসটি হাতে সম্পন্ন করে দিন।");
