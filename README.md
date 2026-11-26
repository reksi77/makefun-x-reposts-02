# makefun-x-reposts-02

[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/reksi77/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/reksi77/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Entry for make.fun's bounty **"Get the most reposts and likes on make.fun's
newest X posts"** — $500 over 50 places, entries close 28 Nov 2026 14:30 WIB.
See the bounty: https://make.fun/bounty/makefun-x-reposts-02

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win. Its
account on X is [@makefunai](https://x.com/makefunai).

## The entry is the posts

Five posts of our own on X, from the public account
[@reksimaulan10](https://x.com/reksimaulan10), each one a quote of a
different post from @makefunai's pool (every @makefunai post from
https://x.com/makefunai/status/2125053632605196760 on). Each post's own
words carry `make.fun` and our play code. Score = 2 x reposts + 2 x quotes
+ likes, summed over all our posts; the top 50 share $500.

The drafts are in [DRAFTS.md](DRAFTS.md) — five quotes in five different
voices, each built on one concrete, true detail from our own week. The plan
and the live-board analysis are in [PLAN.md](PLAN.md).

## Status

**Not yet posted.** `POSTS.json` still holds a placeholder address. After
the five posts are live on X, their real addresses replace the placeholder
in `POSTS.json` and the entry is submitted. Nothing in this repository
posts anything by itself.

## The program

`main.ts` (Node 22, standard library only) copies `POSTS.json` to
`/output/POSTS.json` — that is all it has to do. It first checks the file
is an object with a `posts` list of 1 to 15 addresses, and refuses to copy
a malformed one. No network, no clock: two runs write identical bytes.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Rules we follow

- One post per pool post, all from one public account, kept public until
  the results are out.
- Never buy reposts, quotes or likes; never use bots, engagement services
  or pods; never repost, quote or like our own posts from our own account.
- Never post the same update again and again.
