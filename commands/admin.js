/*CMD
  command: /admin
  help: Open private admin panel
  answer: Admin panel
CMD*/
var ADMIN_ID = "8312390543";
if (String(user.telegramid) !== ADMIN_ID) {
  Bot.sendMessage("⛔ এই প্যানেল শুধু মূল Admin-এর জন্য।");
  return;
}
Bot.sendMessage("👑 ISRAFILXSHOP — ADMIN PANEL\n\n📥 /inbox — প্রাইভেট সাপোর্ট ইনবক্স\n↩️ /reply USER_ID মেসেজ — কাস্টমারকে ব্যক্তিগত উত্তর\n📦 /pending — Pending অর্ডার\n✅ /approve ORDER_ID — অর্ডার Approve\n❌ /reject ORDER_ID — অর্ডার Reject\n\n🔒 মূল Admin Chat ID: " + ADMIN_ID + "\n\n⚠️ পেমেন্ট যাচাই না করে Approve করবেন না।");
