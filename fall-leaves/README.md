# fall-leaves

A Claude Code mod that gives the desktop app an autumn look: a warm parchment
palette by day, dark umber with burnt-orange accents by night, and leaves in
rust, gold and crimson drifting slowly down the left side of the window. Text
stays readable because panels are frosted over the scene, and with reduced
motion on, the leaves rest in place.

It is a theme only. It changes colors and draws a backdrop, and it does not
read your files, run commands or make network requests.

## Install

At the prompt of a terminal session:

```
/plugin install fall-leaves --marketplace oily-dodo/claude-mods
```

From a shell:

```bash
claude plugin install fall-leaves --marketplace oily-dodo/claude-mods
```

In the desktop app: click **+** next to the prompt box, then **Plugins**,
**Add marketplace** with `oily-dodo/claude-mods`, then **Add plugin**.

Start a new session afterwards to see the leaves.

## Tuning

The speed of the fall is the `* 1.25` on the `duration` line in
`hooks/register.tsx`. Raise it to slow the leaves, lower it to speed them up.
