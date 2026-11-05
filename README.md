# FFGlory Reseller Telegram Bot

Bots.Business (BJS) project. All navigation uses Telegram inline keyboards.

## Owner
Telegram ID: 8312390543

## Security
- Do not commit API keys or bot tokens.
- Configure the FFGlory API key privately through the owner-only API Setup command.
- The API key previously pasted into chat must be rotated before use.
- Access is allowlist-based. Only owner-approved Telegram IDs can use reseller features.

## Initial commands
Import the `commands/` files into Bots.Business and Git Sync the repository.
Set command names to the filename without `.js`.
Set `need_reply` on commands marked in their header comments.

## Important limitations
This is the first implementation milestone. Verify HTTP callback syntax in your Bots.Business runtime before live use. API calls use FFGlory's documented endpoints. No API operation is executed automatically on import.
