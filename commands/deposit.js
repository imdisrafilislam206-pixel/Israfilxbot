/*CMD
  command: /deposit
  aliases: 💎 Add Funds / Deposit
  help: Add balance
CMD*/
var bk=Bot.getProperty("pay_bkash")||"Admin will update";
var ng=Bot.getProperty("pay_nagad")||"Admin will update";
var ro=Bot.getProperty("pay_rocket")||"Admin will update";
Bot.sendKeyboard("💳 bKash, 💳 Nagad, 💳 Rocket,\n📨 Submit TrxID, ⬅️ Back to Home","💎 ADD FUNDS\n\n bKash: "+bk+"\n Nagad: "+ng+"\n Rocket: "+ro+"\n\nপেমেন্টের পর Submit TrxID বাটন চাপুন। অ্যাডমিন যাচাই না করা পর্যন্ত ব্যালেন্স যোগ হবে না।");