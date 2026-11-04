/*CMD
  command: /admin
  help: Open admin panel
  answer: Admin panel
CMD*/
var ADMIN_ID = "8312390543";
if (String(user.telegramid) !== ADMIN_ID) {
  Bot.sendMessage("⛔ এই কমান্ডটি শুধু Admin ব্যবহার করতে পারবেন।");
  return;
}
Bot.sendMessage("👑 ISRAFILXSHOP ADMIN PANEL\n\n/pending — Pending orders দেখুন\n/approve ORDER_ID — অর্ডার Approve\n/reject ORDER_ID — অর্ডার Reject\n\nApprove করার আগে পেমেন্ট নিজে যাচাই করুন।");
