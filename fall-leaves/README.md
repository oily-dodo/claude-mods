# fall-leaves

A Claude Code mod that gives the desktop app an autumn look: a warm parchment
palette by day, dark umber with burnt-orange accents by night, and leaves in
rust, gold and crimson drifting slowly down the left side of the window. Text
stays readable because panels are frosted over the scene, and with reduced
motion on, the leaves rest in place.

It is a theme only. It changes colors and draws a backdrop, and it does not
read your files, run commands or make network requests.

## Install

At the prompt of a terminal session (typing `/plugin` in the desktop app opens Settings instead of installing):

```
/plugin install fall-leaves --marketplace oily-dodo/claude-mods
```

From a shell (needs the `claude` command on your PATH, which the desktop app does not add by itself):

```bash
claude plugin install fall-leaves --marketplace oily-dodo/claude-mods
```

In the desktop app: click **+** next to the prompt box, then **Plugins**,
**Add marketplace** with `oily-dodo/claude-mods`, then **Add plugin**.

If the mod does not show up in the desktop app's search, use the shell command above.

Start a new session afterwards to see the leaves.

## Where the leaves show

A mod's backdrop covers the whole window and cannot target one panel, so the
leaves fall in the main area along the left edge rather than behind the sidebar
itself.

## Tuning

Everything lives in `hooks/register.tsx`:

- **Speed:** the `* 1.25` on the `duration` line. Raise it to slow the leaves,
  lower it to speed them up.
- **Leaf count:** `const count = 22`.
- **Left-edge concentration:** the `x` formulas in `buildScene`.
- **Readability:** the `glass` blur and opacity in `LOOK`.

## License

[MIT](LICENSE)
