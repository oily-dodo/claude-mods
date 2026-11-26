# repo-branch-band

A Claude Code mod that shows where a session is working: the local folder,
the remote repository and the branch, in a quiet line above the prompt box.

```
ⓘ Attached repos — local: mods-development · remote: oily-dodo/claude-mods · branch: main
```

The line is small italic text in a muted color, so it reads as information and
not as part of the conversation. It re-reads the repository each time the band
redraws, so a branch switch shows up without restarting the session.

## Install

Needs Claude Code with the `claude` command on your PATH. If you have only the
desktop app, install the command-line tool once; the desktop app does not add
it by itself.

In a Claude Code session, desktop app or terminal:

```
/plugin install repo-branch-band --marketplace oily-dodo/claude-mods
```

Or from a shell:

```bash
claude plugin install repo-branch-band --marketplace oily-dodo/claude-mods
```

Start a new session afterwards to see it.

## When there is no remote

If the folder is a git repository with no remote, the line reads
`remote: none`, and **none** is a button. Pressing it adds this to the prompt
box, after anything you have already typed:

> Help me connect this project to a remote GitHub repository.

It does not send anything. You read it, edit it if you like, and press Enter.

## What it shows and when

| Situation | What you see |
| --- | --- |
| Git repo with a remote | `ⓘ Attached repos — local: <folder> · remote: <owner/name> · branch: <branch>` |
| Git repo with no remote | `ⓘ Attached repos — local: <folder> · remote: none · branch: <branch>` (`none` is a button) |
| Detached HEAD | the branch shows as `detached` |
| Not in a git repository | no line |
| A survey is showing | no line, so it never covers a survey |

The remote is shortened to `owner/name` from either an SSH or an HTTPS URL.

## What it touches

It asks the engine which working copy the session is in, and reads the
folder name, remote URL and branch from the answer. It makes no network
requests, runs no commands of its own, writes no files and sends no prompts.

## Tuning

Everything lives in `hooks/register.tsx`:

- **Wording:** the `Attached repos` label and the template strings that start
  with `local:`.
- **Text size:** `size="footnote"`. The steps are `caption`, `footnote`,
  `body`, `heading` and `title`.
- **Button request:** the `text` passed to `$.prompt.fill`.

The app draws its own frame around any row in the band, and a mod cannot
remove it.

## License

[MIT](LICENSE)
