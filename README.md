# Claude Mods

Small mods for [Claude Code](https://claude.com/claude-code) by Oily Dodo.

A mod is a plugin that changes how Claude's own interface looks or behaves: a
theme, a line of information above the prompt box, a slash command. Each mod
here lives in its own folder and installs on its own from this repo, which is
also a Claude Code *marketplace*.

## The mods

| Mod | What it does |
| --- | --- |
| [`fall-leaves`](fall-leaves) | An autumn theme: a warm parchment palette by day, dark umber by night, and leaves drifting down the left side of the window. A theme only: it reads no files, runs no commands and makes no network requests. |
| [`repo-branch-band`](repo-branch-band) | A quiet line above the prompt box: `local: <folder> · remote: <owner/name> · <branch>`. With no remote it reads `remote: none`, and **none** is a button that drops a connect-a-remote request into the prompt box for you to send. |

Each folder has its own README with details and tuning notes.

## Install

You add this repo as a marketplace once, then install whichever mods you want.

**In the desktop app**

1. Click **+** next to the prompt box, then **Plugins**.
2. Choose **Add marketplace** and enter `oily-dodo/claude-mods`.
3. Choose **Add plugin** and pick a mod.
4. Start a new session to see it.

**At the prompt of a terminal session**

```
/plugin marketplace add oily-dodo/claude-mods
/plugin install fall-leaves --marketplace oily-dodo/claude-mods
/plugin install repo-branch-band --marketplace oily-dodo/claude-mods
```

**From a shell**

```bash
claude plugin install fall-leaves --marketplace oily-dodo/claude-mods
claude plugin install repo-branch-band --marketplace oily-dodo/claude-mods
```

An installed mod stays on for every new session until you turn it off. Type
`/plugin` to see what you have installed and to enable, disable or remove it.

## Good to know

- **Requirements:** Claude Code, in the desktop app or the terminal, with
  plugin support. A mod only works on surfaces that draw what it changes: the
  Fall Leaves backdrop appears in the desktop app, not in a plain terminal.
- **Safety:** mods run inside Claude Code. These two only draw things.
  `repo-branch-band` asks Claude Code which repository you are in and shows the
  answer. Neither reads your files, makes network requests or sends prompts on
  its own. The source is short enough to read before you install it: each mod's
  logic is one file, `hooks/register.tsx`.
- **The frame around the line:** Claude Code draws its own box around anything
  a mod puts above the prompt, and a mod cannot remove it.

## What is in this repo

```
.claude-plugin/marketplace.json   the list of mods this marketplace offers
fall-leaves/                      one mod: manifest, hooks, README, license
repo-branch-band/                 one mod: manifest, hooks, README, license
```

Inside a mod, `.claude-plugin/plugin.json` names it and `hooks/register.tsx`
holds its code.

## Issues and ideas

Found a problem or want a change? Open an issue on this repo. Say which mod,
whether you use the desktop app or the terminal, and what you saw.

## License

MIT. Each mod folder carries its own copy of the [license](LICENSE), so the
notice travels with whatever you install.
