/*CMD
  command: /setup_panel
  help: Legacy setup route disabled; use Telegram Admin Panel
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ শুধু মালিক এই অংশে প্রবেশ করতে পারবেন।");
  return;
}

Bot.sendMessage("ℹ️ এখন থেকে সব ব্যবস্থাপনা Telegram-এর ভেতরের 👑 Admin Panel থেকে হবে। Bots.Business-এর আলাদা Admin Panel ব্যবহার করার প্রয়োজন নেই।");
Bot.runCommand("👑 Admin Panel");
