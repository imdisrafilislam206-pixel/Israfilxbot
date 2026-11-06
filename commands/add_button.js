/*CMD
  command: ➕ Add Button
  help: Start adding a custom dashboard button
  answer: ➕ নতুন বাটনের নাম লিখুন। উদাহরণ: My Offers
  need_reply: true
CMD*/

if (!user || String(user.telegramid) !== "8312390543") return;
var label = String(message || "").trim();
if (!label || label.length > 50) { Bot.sendMessage("⚠️ নাম ১ থেকে ৫০ অক্ষরের মধ্যে লিখুন। আবার Add Button চাপুন।"); return; }
var list = Bot.getProperty("custom_buttons") || [];
if (typeof list === "string") { try { list = JSON.parse(list); } catch(e) { list = []; } }
for (var i=0;i<list.length;i++) if (list[i].label === label) { Bot.sendMessage("⚠️ এই নামে বাটন আগে থেকেই আছে।"); return; }
User.setProperty("draft_button_label",label,"string");
Bot.runCommand("➕ Set Button Emoji");
