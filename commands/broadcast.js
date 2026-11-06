/*CMD
  command: 📢 Broadcast
  help: Broadcast to users
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ এই মেনু শুধু মালিকের জন্য।");
  return;
}
Bot.sendKeyboard("📢 Send Broadcast, 🔙 Back, 🏠 Home", "📢 Broadcast\n\nসকল ইউজারের কাছে বার্তা পাঠানোর নিরাপদ কনফার্মেশন-সহ ব্যবস্থা এখনো যুক্ত হয়নি।");
