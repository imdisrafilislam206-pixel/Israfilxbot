/*CMD
  command: /setup_panel
  help: Create editable ISRAFILXSHOP settings panels
  need_reply: false
CMD*/

if (!user || String(user.telegramid) !== "8312390543") {
  Bot.sendMessage("⛔ এই সেটআপ শুধু মালিকের জন্য।");
  return;
}

AdminPanel.setPanel({
  panel_name: "shop_settings",
  data: {
    title: "ISRAFILXSHOP — Shop Settings",
    description: "দোকানের নাম, Welcome লেখা, সাপোর্ট ও গ্রুপ সেটিংস পরিবর্তন করুন।",
    index: 0,
    button_title: "Save Settings",
    fields: [
      { name: "shop_name", title: "Shop name", type: "string", value: "ISRAFILXSHOP" },
      { name: "welcome_line", title: "Welcome subtitle", type: "text", value: "আমাদের প্রিমিয়াম ডিজিটাল শপে স্বাগতম।" },
      { name: "support_whatsapp", title: "WhatsApp support link/number", type: "string", value: "" },
      { name: "support_telegram", title: "Telegram support link/username", type: "string", value: "" },
      { name: "announcement_group", title: "Announcement group ID", type: "string", value: "" },
      { name: "deposit_instructions", title: "Payment/support instructions", type: "text", value: "পেমেন্ট নির্দেশনার জন্য সাপোর্টে যোগাযোগ করুন।" }
    ]
  }
});

AdminPanel.setPanel({
  panel_name: "product_catalog",
  data: {
    title: "ISRAFILXSHOP — Product Catalog",
    description: "প্রতিটি পণ্যের নাম, মূল্য ও চালু/বন্ধ অবস্থা পরিবর্তন করুন। আপাতত ৫টি পণ্য স্লট প্রস্তুত।",
    index: 1,
    button_title: "Save Products",
    fields: [
      { name: "p1_name", title: "Product 1 name", type: "string", value: "Free Fire Diamond Top-up" },
      { name: "p1_price", title: "Product 1 price (BDT display only)", type: "string", value: "আপডেট করুন" },
      { name: "p1_on", title: "Product 1 enabled", type: "checkbox", value: true },
      { name: "p2_name", title: "Product 2 name", type: "string", value: "Weekly Membership" },
      { name: "p2_price", title: "Product 2 price (BDT display only)", type: "string", value: "আপডেট করুন" },
      { name: "p2_on", title: "Product 2 enabled", type: "checkbox", value: true },
      { name: "p3_name", title: "Product 3 name", type: "string", value: "Monthly Membership" },
      { name: "p3_price", title: "Product 3 price (BDT display only)", type: "string", value: "আপডেট করুন" },
      { name: "p3_on", title: "Product 3 enabled", type: "checkbox", value: true },
      { name: "p4_name", title: "Product 4 name", type: "string", value: "Free Fire Item 4" },
      { name: "p4_price", title: "Product 4 price (BDT display only)", type: "string", value: "আপডেট করুন" },
      { name: "p4_on", title: "Product 4 enabled", type: "checkbox", value: false },
      { name: "p5_name", title: "Product 5 name", type: "string", value: "Free Fire Item 5" },
      { name: "p5_price", title: "Product 5 price (BDT display only)", type: "string", value: "আপডেট করুন" },
      { name: "p5_on", title: "Product 5 enabled", type: "checkbox", value: false }
    ]
  }
});

Bot.sendMessage("✅ Admin settings panels তৈরি/আপডেট করা হয়েছে।\nBots.Business অ্যাপের Admin Panel থেকে Shop Settings ও Product Catalog সম্পাদনা করুন।");
