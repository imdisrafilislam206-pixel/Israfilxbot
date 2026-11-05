# FFGlory Reseller Telegram Bot

Bots.Business (BJS) project. Navigation uses Telegram inline keyboards.

## Owner
Telegram ID: 8312390543

## Security
- Do not commit API keys or bot tokens.
- Configure the FFGlory API key privately through the owner-only API Setup command.
- The API key previously pasted into chat must be rotated before use.
- Access is allowlist-based. Only owner-approved Telegram IDs can use reseller features.

## New communication and notification features
- `grouppost.js`: owner-only broadcast to private chats known to the bot. Set the command's **Wait for answer / need_reply** option and its answer prompt.
- `contactadmin.js`: user-to-owner private support. Set **need_reply** and an answer prompt. Each conversation is stored under a per-user property.
- `adminreply.js`: owner reply flow. Set **need_reply** and an answer prompt; the owner taps the Reply button on a support message or Support Inbox, then sends the reply.
- `supportinbox.js`: owner-only list of recent support threads (up to 20 at a time).
- `setordergroup.js`: owner sets the destination group as a numeric chat ID (recommended) or public @username. Set **need_reply** and an answer prompt.
- `orderlog.js`: internal event hook. Call it after an order is created, completed, or a deposit is received:
  `Bot.runCommand("/orderlog", {event:"ORDER_CREATED", order_id:"123", user_id:"456", product:"Product name", amount:"100"});`
  Use `ORDER_COMPLETED` or `DEPOSIT_RECEIVED` for those events. This hook must be called from the relevant order/API success and admin-complete commands to send the group notification.

## Setup
1. Import the `commands/` files into Bots.Business and Git Sync the repository.
2. Set command names to the filename without `.js`.
3. Set **Wait for answer / need_reply** on: `allowuser`, `removeuser`, `apisetup`, `grouppost`, `contactadmin`, `adminreply`, and `setordergroup`. Configure a suitable answer prompt for each.
4. Add the bot to the order notification group and allow it to send messages. Set the group chat ID from Owner Admin Panel.
5. Wire `/orderlog` into each actual order-created, order-completed, and deposit-success handler. It is not a payment provider webhook by itself.

## Important limitations
- Broadcast reaches private chats the bot knows (users who have started the bot); it cannot message users who never opened the bot or who blocked it.
- Group notifications require the bot to be a member of the destination group with permission to send messages. For private groups, use the numeric chat ID; a private invite link alone is not a chat ID.
- Support messages are private between each user and the owner.
- The order event hook needs to be called by the actual order/payment success paths. Until those order flows are implemented, the hook is available but cannot detect orders on its own.
- Verify behavior in the Bots.Business runtime before live use. No end-to-end runtime test has been run.
