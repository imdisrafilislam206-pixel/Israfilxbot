/*CMD
  command: 🧩 Button Manager
  help: Button Manager
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ এই মেনু শুধু মালিকের জন্য।");
  return;
}
Bot.sendKeyboard("➕ Add Button, ✏️ Edit Button\n🗑️ Delete Button, 📋 List Buttons\n🔙 Back, 🏠 Home", "🧩 Button Manager\n\nএখানে বাটন ম্যানেজমেন্টের প্রবেশপথ তৈরি করা হয়েছে। বাটনের নাম/ইমোজি/ক্রম/কাজ যোগ-এডিট-ডিলিটের পূর্ণ CRUD এখনো যুক্ত হয়নি।");
