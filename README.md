[![make.fun · u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![rank](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/imnotripper/robot-vacuum-excuse/rank.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![reward](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/imnotripper/robot-vacuum-excuse/reward.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

# The Robot Vacuum's Best Excuse

A make.fun bounty entry by [@imnotripper](https://github.com/imnotripper).

> My sensors detected a sock, a charging cable, and what I can only describe as a small hostile nation. I chose diplomacy.

## How it works

`main.ts` is a deterministic emitter: it writes the winning one-line excuse to `/output/entry.txt` (within the 1–140 gate), then reads the file back and validates the gate on the file body itself — single line, non-whitespace, inside the limit. Two runs produce byte-identical output.

## Run

```sh
node main.ts        # writes /output/entry.txt
node --test test.ts # gate + byte-identical rerun checks
```

## Why this line

Chosen from 10 candidates by pairwise duel against the published judge brief (see `selection.md`): the excuse is rooted in the vacuum's own world — sensors, socks, cables — and the straight-faced turn (diplomacy) lands at the end, with the list escalating from mundane to absurd. A tired homeowner has heard every appliance excuse; this one is the first to negotiate.
