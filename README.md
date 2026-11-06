# Guild Glory — Minimal Bots.Business project

This is a clean starter project for the Guild Glory Telegram bot.

## Current feature

When a user presses **Start** or sends `/start`, the bot sends a Bengali welcome message containing:

- Telegram display name
- Telegram User ID
- Current chat ID
- Telegram username (or “নেই” when unavailable)

## Bots.Business setup

1. Open the existing Guild Glory bot in Bots.Business.
2. Create/import the command from `commands/start.js`.
3. Ensure the command is named `/start` and **Wait for reply** is disabled.
4. Save, run the bot, and test by sending `/start`.

No bot token, password, or private credential is stored in this repository.

This starter intentionally contains no store, payment, referral, admin, or other unfinished features.
