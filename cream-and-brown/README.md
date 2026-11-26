# cream-and-brown

A Claude Code mod that gives the desktop app a warm theme: cream in light mode
and dark brown in dark mode. Both palettes use tinted grays, with each surface
only a few percent of lightness from its neighbour, so a card reads as paper on
paper by day and wood on wood by night. The accent is a copper brown, while red,
green and amber keep their usual meaning for danger, success and warning.

It is a theme only. It sets colors once, when a session starts, and it does not
read your files, run commands or make network requests.

## Install

At the prompt of a terminal session:

```
/plugin install cream-and-brown --marketplace oily-dodo/claude-mods
```

From a shell:

```bash
claude plugin install cream-and-brown --marketplace oily-dodo/claude-mods
```

In the desktop app: click **+** next to the prompt box, then **Plugins**,
**Add marketplace** with `oily-dodo/claude-mods`, then **Add plugin**.

Start a new session afterwards to see the theme.

## Light and dark

The mod supplies both palettes and the app picks one. Choose light or dark in
the app's own appearance setting.

## Tuning

Everything lives in `hooks/register.ts`:

- **Colors:** the `anchors` under `light` and `dark` set the page, card, panel
  and menu surfaces and the three text shades.
- **Accent and roles:** the `roles` line sets the accent, danger, success,
  warning and pro colors.
- **Menus in light mode:** `surface-3` must equal `surface-2`.
- **Menus in dark mode:** keep `surface-3` close to `surface-0`. Lightening it
  makes green and muted text harder to read.

When the theme loads, a contrast check runs. If a pairing is so unreadable that
the desktop app would ignore the theme, the mod shows a toast saying so.

## License

[MIT](LICENSE)
