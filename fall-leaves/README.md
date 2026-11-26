# fall-leaves

A Claude Code mod that gives the desktop app an autumn look: a warm parchment
palette by day, dark umber with burnt-orange accents by night, and leaves in
rust, gold and crimson drifting slowly down the left side of the window. Text
stays readable because panels are frosted over the scene, and with reduced
motion on, the leaves rest in place.

## Install

Needs Claude Code with the `claude` command on your PATH. If you have only the
desktop app, install the command-line tool once; the desktop app does not add
it by itself.

In a Claude Code session, desktop app or terminal:

```
/plugin install fall-leaves --marketplace oily-dodo/claude-mods
```

Or from a shell:

```bash
claude plugin install fall-leaves --marketplace oily-dodo/claude-mods
```

Start a new session afterwards to see it.

## Where the leaves show

A mod's backdrop covers the whole window and cannot target one panel, so the
leaves fall in the main area along the left edge rather than behind the sidebar
itself.

## What it touches

It is a theme only. It changes colors and draws a backdrop, and it reads no
files, runs no commands, makes no network requests and sends no prompts.

## Tuning

Everything lives in `hooks/register.tsx`:

- **Speed:** the `* 1.25` on the `duration` line. Raise it to slow the leaves,
  lower it to speed them up.
- **Leaf count:** `const count = 22`.
- **Left-edge concentration:** the `x` formulas in `buildScene`.
- **Readability:** the `glass` blur and opacity in `LOOK`.

## License

[MIT](LICENSE)
