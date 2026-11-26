# Mod README template

Every mod in this repo has a `README.md` in this exact form, so a reader who
has seen one has seen them all. Copy the skeleton below into the new mod's
folder and replace the `<placeholders>`. Keep the Install section word for word,
changing only `<mod-name>`.

## Rules

- The section order never changes: title, intro, Install, mod-specific sections,
  What it touches, Tuning, License.
- Install is identical in every mod apart from the name. Do not add a
  per-mod variation, and do not add steps that have not been tried.
- A mod's logic lives in one file, `hooks/register.tsx` (or `register.ts`), and
  Tuning points into it.
- License is the single line `[MIT](LICENSE)`, and the folder holds its own
  copy of the `LICENSE` file.
- Wrap prose at about 80 columns.
- Also update the root `README.md` (the mods table, the install lines and the
  folder tree) and `.claude-plugin/marketplace.json`.

## Skeleton

````markdown
# <mod-name>

A Claude Code mod that <one or two sentences on what it does and looks like>.

## Install

Needs Claude Code with the `claude` command on your PATH. If you have only the
desktop app, install the command-line tool once; the desktop app does not add
it by itself.

In a Claude Code session, desktop app or terminal:

```
/plugin install <mod-name> --marketplace oily-dodo/claude-mods
```

Or from a shell:

```bash
claude plugin install <mod-name> --marketplace oily-dodo/claude-mods
```

Start a new session afterwards to see it.

## <Mod-specific section, if any>

<Behavior, cases or caveats a user needs. Repeat for more sections.>

## What it touches

<For a theme: "It is a theme only. It sets colors and draws, and it reads no
files, runs no commands, makes no network requests and sends no prompts."
For anything else, say exactly what it reads, runs, writes and sends.>

## Tuning

Everything lives in `hooks/register.tsx`:

- **<Setting>:** <where it is and what changing it does>.

## License

[MIT](LICENSE)
````
