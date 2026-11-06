/*CMD
  command: admin
  help: Owner dashboard
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases: 👑 অ্যাডমিন প্যানেল
  group:
CMD*/
var OWNER="8312390543";
if(String(user.telegramid)!==OWNER){Bot.sendMessage("⛔ এই Admin Panel শুধু Owner-এর জন্য।");return;}
var users=Bot.getProperty("ffg_all_users",[]);if(!Array.isArray(users))users=[];
var group=Bot.getProperty("ffg_order_group","Not set");
Bot.sendKeyboard("👥 ইউজার ম্যানেজমেন্ট, 🔐 পারমিশন ম্যানেজমেন্ট
📢 গ্রুপ পোস্ট, 💬 সাপোর্ট ইনবক্স
⚙️ API সেটিংস, 💰 ব্যালেন্স ও লেনদেন
🛍️ প্রোডাক্ট ও প্রাইস, 📊 রিপোর্ট
🏠 মূল মেনু\n🔄 রিফ্রেশ মেনু, 🏠 মূল মেনু","👑 GUILD GLORY — OWNER CONTROL CENTER\nনিচের বাটন থেকে একটি বিভাগ নির্বাচন করুন।");