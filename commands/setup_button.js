/*CMD
  command: 🛠️ Setup Admin Settings
  help: Create editable shop settings panels
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ শুধু অ্যাডমিন এই সেটআপ চালাতে পারবেন।");
  return;
}
Bot.runCommand("/setup_panel");
