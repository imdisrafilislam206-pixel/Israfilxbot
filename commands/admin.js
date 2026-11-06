/*CMD
command: /admin
help: Owner dashboard
need_reply: false
aliases: 👑 অ্যাডমিন প্যানেল, ↩️ Admin, ⬅️ Admin
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendMessage("⛔ শুধু Owner ব্যবহার করতে পারবেন।");return;}
var users=Bot.getProperty("ffg_all_users",[]);
if(!Array.isArray(users))users=[];
Bot.sendKeyboard("👥 ইউজার ম্যানেজমেন্ট, 🔐 পারমিশন,\n🛠️ পণ্য ম্যানেজ, 🛍️ Guild Glory Store,\n📢 গ্রুপ পোস্ট, 💬 সাপোর্ট ইনবক্স,\n⚙️ API সেটিংস, 🎁 রেফারেল সেটিংস,\n🎟️ কুপন, 💰 ব্যালেন্স,\n📊 রিপোর্ট, 🏠 মূল মেনু","👑 GUILD GLORY — OWNER DASHBOARD\nমোট নিবন্ধিত ইউজার: "+users.length+"\nযে কাজটি করতে চান, চ্যাট ইনপুটের ওপরে থাকা বাটন চাপুন।");