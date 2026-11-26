# cream-and-brown

A Claude Code mod that gives the desktop app a warm theme: cream in light mode
and dark brown in dark mode. Both palettes use tinted grays, with each surface
only a few percent of lightness from its neighbour, so a card reads as paper on
paper by day and wood on wood by night. The accent is a copper brown, while red,
green and amber keep their usual meaning for danger, success and warning.

## Install

Needs Claude Code with the `claude` command on your PATH. If you have only the
desktop app, install the command-line tool once; the desktop app does not add
it by itself.

In a Claude Code session, desktop app or terminal:

```
/plugin install cream-and-brown --marketplace oily-dodo/claude-mods
```

Or from a shell:

```bash
claude plugin install cream-and-brown --marketplace oily-dodo/claude-mods
```

Start a new session afterwards to see it.

## Light and dark

The mod supplies both palettes and the app picks one. Choose light or dark in
the app's own appearance setting.

## What it touches

It is a theme only. It sets colors once, when a session starts, and it reads no
files, runs no commands, makes no network requests and sends no prompts.

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
