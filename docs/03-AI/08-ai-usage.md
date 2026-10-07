---
title: Usage and Cost
slug: "/Pro Features/ai-usage"
---

Phoenix Code keeps track of the tokens the AI uses and what they would cost at API list prices. Nothing here is billed by Phoenix Code. With a Claude subscription the cost is included in your plan, and with an API key your provider bills you. The figures are there to help you see what a task costs.

## The Usage Chip

The chip at the bottom right of the chat shows the tokens and cost of the current conversation, like *132k tok · $0.45*. It updates while the AI works. Click it for the details:

![Usage chip](../images/pro/ai-usage-chip.png "The usage popover for a chat")

- **All** shows the totals for the chat: input and output tokens, cache reads and writes, the number of turns and API calls, time spent in the API, and the cost at list price.
- A tab for each **model** that took part shows its share.
- The **gear** tab has two options. **Show usage after every turn** adds a line under each reply with that turn's tokens, cost, time, and model. **Show $ cost** turns the cost figures on or off everywhere.

> Most tokens in a chat are cache reads, which are much cheaper than fresh input. The cost figure already takes that into account.

The chip resets when you start a new conversation. Session history shows the totals of each saved session.

## The Usage Card

After your first chat, a **Usage** card appears on the start screen. It shows the last 30 days as a heat map, with the busiest days darkest.

![Usage card](../images/pro/ai-usage-card.png "The usage card on the start screen")

Click the card, or **Details**, to open the breakdown:

![Usage details](../images/pro/ai-usage-details.png "The usage details for the last 30 days")

- The headline figures show spend, tokens, and active days for the period.
- The bars show each day, split by model. Hover a bar or a heat map cell for that day's numbers.
- **Top models** lists the models by spend or tokens.
- **Activity** shows your longest streak, active days, and the average per active day.
- The arrows next to **Last 30 days** page back through earlier months.

The **reload** button *(circular arrow)* re-reads the figures, for example after a chat in another Phoenix Code window.

The card counts every Visual AI turn, and the API calls of [CLI sessions](./06-ai-cli.md) started from the panel, listed as `cli-` models. Usage is kept on this computer, per signed-in account.

## Free Account Limits

Free accounts get a daily and a monthly limit on Visual AI chats. Every message you send counts as one chat. Once you pass half of either limit, a bar above the message box shows how many you have used, like *3 / 5 daily chats used*. Click its **x** to hide it until your next message.

When a limit is reached, the bar says so, and the message box is disabled until the limit resets: the next day for the daily limit, the next month for the monthly one. [Phoenix Code Pro](https://phcode.dev/pricing) removes both limits.
