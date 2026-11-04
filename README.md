# ISRAFILXSHOP — Manual Admin Approval (Bots.Business)

This version adds a manual order workflow. Customers submit an order, the configured admin receives it, and the admin approves or rejects it.

## Admin setup
- The configured admin Telegram ID is `8312390543` (copied from the starter project).
- Before importing, confirm this is YOUR Telegram numeric ID. If it is not, replace `8312390543` in `commands/admin.js`, `commands/pending.js`, `commands/approve.js`, and `commands/reject.js`.
- Do not share your bot token or payment credentials in this repository.

## Commands
Customer:
- `/start` or `/menu` — shop menu
- `/packages` — package list
- `/buy` — submit order (reply format below)
- `/myorders` — own order history/status
- `/deposit` — manual payment instructions
- `/wallet` — wallet notice (no automatic wallet ledger)
- `/support` — support details

Admin:
- `/admin` — admin panel
- `/pending` — list pending orders
- `/approve ORDER_ID` — approve an order after manually checking details/payment
- `/reject ORDER_ID` — reject an order

## Order submission format
After `/buy`, send one message in this format:

`Package name | Free Fire Player ID | Server | Payment Transaction ID (or NONE)`

Example:
`200 Likes - 1 Day | 123456789 | BD | NONE`

Do not ask customers to pay until you have confirmed the current price and payment number. If a customer has already paid, verify the transaction in the official bKash/Nagad account before approving.

## Important limitations
- Approval/rejection and order status are stored as Bots.Business bot/user properties.
- This does NOT automatically deliver Free Fire likes.
- This does NOT verify bKash/Nagad payments or provide a real wallet balance.
- After approval, the admin must manually complete the service and contact the customer.
- Test with a second Telegram account and a low-risk test order before accepting real orders.
- Back up the existing bot before Git import because importing can replace commands.
