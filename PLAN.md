# Plan — makefun-x-reposts-02

## The bounty in one line
Quote or reply to @makefunai's newest X posts from one public account
(@reksimaulan10); score = 2 x reposts + 2 x quotes + likes, summed over up
to 15 posts; top 50 of $500 get paid (1st $100). Entries close
2026-11-28T07:30:00Z (28 Nov 14:30 WIB).

## Deciding metric and the bar (live leaderboard, 26 Nov ~21:55 WIB)
- 339 ranked entries, 421 submissions. #1 = 1433, #2 = 1429 (both 7 posts),
  #3 = 685, #10 = 284, #50 = 42, #100 = 2, median 0.
- The top 2 are outliers — almost certainly accounts with a real audience.
  The realistic target for a fresh account is the paid cutoff: **42 points**.
- With 5 posts, that means ~9 points each (e.g. 3 likes + 3 reposts per
  post). Every post must be worth reposting on its own; begging for likes
  is not a strategy.

## Winner pattern to imitate (mechanism, not words)
- Top entries name 7 posts, not 15: they answer the pool posts that were
  live when they entered and stop. More posts only help if each one earns
  engagement; a dead post adds 0 and dilutes nothing, but a spammy set
  reads as spam. We start with 5 (the whole known pool), and add more only
  if @makefunai posts again before the deadline.
- Quotes beat replies for visibility: our words sit on top of make.fun's
  post, seen by everyone opening it. All 5 drafts are quotes.

## What we do differently
- No generic "check out make.fun!!" promo lines. Each draft carries one
  concrete, true detail from our own week (3:47 a.m. rewrite, 177 entries
  and $0 won, 52-story news page, Solara Bay's 988,047 judge points,
  the haunted-server-room one-liner) in a different voice: deadpan, dry
  underdog, list, dialogue, tender. A stranger reading all five should not
  be able to tell they were written in the same hour.
- No bought/botted/self-made engagement, ever. No reposting our own posts
  from the entrant account. No duplicate posts.

## Gaps and risks
- The pool posts' texts could not be read (FxTwitter is Cloudflare-blocked
  from this VM; web search does not index them). Drafts are therefore
  self-contained: each works as a quote above any make.fun post. If the
  poster can read the quoted post at posting time, they may adjust the
  opening clause to answer it — but the play code, make.fun, and the
  280-character cap must survive any edit.
- @reksimaulan10 is a new account with ~0 followers. Quotes of
  @makefunai's posts are the distribution: they surface on make.fun's
  posts. Even so, reaching 42 points is a stretch, not a given.
- The X account's suspended/not-suspended status is still being verified
  by the user on their phone. Nothing here posts anything: this repo is
  drafts + program only. POSTS.json holds a placeholder until the posts
  are live; the parent fills it in and submits.

## Edge cases checked
- Play code `makefun-teacup-pickle-shrimp` appears exactly in every draft.
- Every draft carries `make.fun` written out in its own words.
- Every draft is 144–211 characters (cap 280), counted with a script.
- One draft per pool post, all five pool posts different, all ids at or
  above the floor 2125053632605196760.
- main.ts: standard library only, no network, no clock, deterministic —
  two runs write identical bytes. It validates POSTS.json shape before
  copying (refuses a malformed list instead of shipping garbage).
