// /orderlog — internal event hook. Call after an order/deposit is created or marked completed.
// Example from the relevant success/admin-complete command:
// Bot.runCommand("/orderlog", {event:"ORDER_COMPLETED", order_id:"...", user_id:"...", product:"...", amount:"..."});
var group = String(Bot.getProperty("ffg_order_group") || "");
if (!group) { return; }
var event = (options && options.event) ? String(options.event) : "ORDER_UPDATE";
var orderId = (options && options.order_id) ? String(options.order_id) : "N/A";
var uid = (options && options.user_id) ? String(options.user_id) : String(user.telegramid || "N/A");
var product = (options && options.product) ? String(options.product) : "N/A";
var amount = (options && options.amount) ? String(options.amount) : "N/A";
var status = event === "ORDER_COMPLETED" ? "✅ COMPLETED" :
             event === "ORDER_CREATED" ? "🆕 NEW ORDER" :
             event === "DEPOSIT_RECEIVED" ? "💰 DEPOSIT RECEIVED" : event;
var text = "📦 *Guild Glory Order Update*\n\nStatus: " + status +
  "\nOrder ID: " + orderId + "\nUser ID: " + uid +
  "\nProduct: " + product + "\nAmount: " + amount;
Bot.sendMessageToChatWithId(group, text);
