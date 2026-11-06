/*CMD
  command: 🧩 Button Manager
  help: Add, edit, delete and list custom dashboard buttons
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ শুধু মালিক Button Manager ব্যবহার করতে পারবেন।");
  return;
}
Bot.sendKeyboard(
  "➕ Add Button, ✏️ Edit Button\n🗑️ Delete Button, 📋 List Buttons\n🔙 Back, 🏠 Home",
  "🧩 *Button Manager*\n\n➕ Add Button চাপলে নাম, ইমোজি ও কাজ জিজ্ঞেস করবে।\n✏️ Edit Button চাপলে আগে তৈরি করা বাটনের তালিকা দেখাবে।\n🗑️ Delete Button চাপলে বেছে নিয়ে মুছতে পারবেন।"
);
