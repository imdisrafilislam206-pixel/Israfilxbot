/*CMD
  command: /support
  aliases: 📞 Contact Admin
  help: Contact shop admin
  need_reply: true
CMD*/
Bot.sendMessageToChatWithId(8312390543, "📩 CUSTOMER SUPPORT\nName: " + (user.first_name || "Customer") + "\nUsername: @" + (user.username || "none") + "\nChat ID: " + user.telegramid + "\n\n" + message);
Bot.sendMessage("আপনার মেসেজ অ্যাডমিনের কাছে পাঠানো হয়েছে। অ্যাডমিন এই Chat ID-তে রিপ্লাই দিতে পারবেন: " + user.telegramid);