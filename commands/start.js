/*CMD
  command: /start
  help: Open ISRAFILXSHOP
  answer: Welcome to ISRAFILXSHOP
  keyboard: 🛒 Packages, 💳 Deposit
  keyboard: 💰 Wallet, 📦 My Orders
  keyboard: 💬 Private Support
CMD*/
var name = user.first_name || "বন্ধু";
Bot.sendMessage("👑 স্বাগতম " + name + "!\n\n🛍️ ISRAFILXSHOP\n🎮 Free Fire Top-Up & Digital Items\n\n🛒 প্যাকেজ: /packages\n💳 ডিপোজিট: /deposit\n💰 ওয়ালেট: /wallet\n📦 আমার অর্ডার: /myorders\n💬 ব্যক্তিগত সাপোর্ট: /support\n\n🔐 আপনার সাপোর্ট মেসেজ শুধু Admin দেখতে পাবেন।");
