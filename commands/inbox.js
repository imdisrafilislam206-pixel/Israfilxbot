/*CMD
  command: /inbox
  help: Admin inbox instructions
  answer: Private support inbox
CMD*/
if (String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ শুধু মূল Admin এই ইনবক্স দেখতে পারবেন।");
  return;
}
Bot.sendMessage("📥 ADMIN PRIVATE INBOX\n\nকাস্টমার /support দিয়ে মেসেজ করলে এই চ্যাটে সরাসরি নোটিফিকেশন পাবেন।\n\nউত্তর দিতে:\n/reply USER_CHAT_ID আপনার উত্তর\n\n🔒 কাস্টমাররা একে অপরের মেসেজ দেখতে পাবে না।");
