/*CMD
command: admin
help: Owner dashboard
need_reply: false
aliases: 👑 অ্যাডমিন প্যানেল
CMD*/
if(String(user.telegramid)!=="8312390543"){Bot.sendMessage("⛔ শুধু Owner ব্যবহার করতে পারবেন।");return;}
var users=Bot.getProperty("ffg_all_users",[]);
if(!Array.isArray(users))users=[];
Bot.sendInlineKeyboard([
[{title:"👥 ইউজার ম্যানেজমেন্ট",command:"/adminusers"}],
[{title:"🔐 পারমিশন",command:"/permissions"}],
[{title:"📢 গ্রুপ পোস্ট",command:"/grouppost"},{title:"💬 সাপোর্ট ইনবক্স",command:"/supportinbox"}],
[{title:"⚙️ API সেটিংস",command:"/apisetup"}],
[{title:"💰 ব্যালেন্স",command:"/account"},{title:"📊 রিপোর্ট",command:"/groups"}],
[{title:"🛠️ পণ্য যোগ/ম্যানেজ",command:"/adminproducts"},{title:"🛍️ API প্রাইস",command:"/pricing"}],
[{title:"🎟️ কুপন",command:"/coupons"}],
[{title:"🏠 মূল মেনু",command:"/start"}]
],"GUILD GLORY — OWNER CONTROL CENTER\nমোট নিবন্ধিত ইউজার: "+users.length+"\nবিভাগ নির্বাচন করুন।");