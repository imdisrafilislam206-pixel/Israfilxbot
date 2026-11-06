/*CMD
  command: 🎧 Support
  help: Show editable customer support contacts
  need_reply: false
CMD*/

var wa = AdminPanel.getFieldValue({ panel_name: "shop_settings", field_name: "support_whatsapp" }) || "এখনো সেট করা হয়নি";
var tg = AdminPanel.getFieldValue({ panel_name: "shop_settings", field_name: "support_telegram" }) || "এখনো সেট করা হয়নি";
var msg = "🎧 *ISRAFILXSHOP Customer Support*\n━━━━━━━━━━━━━━━━━━\n\n";
msg += "📱 WhatsApp: " + wa + "\n";
msg += "✈️ Telegram: " + tg + "\n\n";
msg += "যোগাযোগের তথ্য অ্যাডমিন প্যানেল থেকে পরিবর্তন করা যাবে।";
Bot.sendKeyboard("🔙 Back, 🏠 Home", msg);
