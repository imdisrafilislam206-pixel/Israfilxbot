/*CMD
  command: /support
  aliases: 🎧 Live Support
  help: Contact shop admin
  need_reply: true
CMD*/
Bot.sendMessageToChatWithId(8312390543, "📩 SUPPORT REQUEST\nName: " + (user.first_name || "Customer") + "\nUsername: @" + (user.username || "none") + "\nChat ID: " + user.telegramid + "\n\n" + message);
Bot.sendMessage("✅ আপনার মেসেজ অ্যাডমিনের কাছে পাঠানো হয়েছে।");