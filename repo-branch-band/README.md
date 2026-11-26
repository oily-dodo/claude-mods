# repo-branch-band

A Claude Code mod that adds a small, dim, italic line of text just above the
prompt box so you always know where you are working:

```
local: my-project · remote: svilotti-od/my-project · main
```

- **local** is the name of the folder you are working in.
- **remote** is the GitHub repository the project is attached to, shortened
  to `owner/name`. Both SSH (`git@github.com:owner/name.git`) and HTTPS
  (`https://github.com/owner/name.git`) remotes are recognized.
- The last item is the current **branch**, or `detached` if you are not on one.

## When there is no remote

If the project has no remote repository, the line reads `remote: none`, and
**none** is a button. Clicking it adds this request to the prompt box:

> Help me connect this project to a remote GitHub repository.

It is appended to whatever you have already typed, so a draft is never lost,
and nothing is sent until you review it and press Enter.

## When it stays out of the way

- If the folder is not a git repository, no line is shown.
- While Claude is showing a survey above the prompt box, the line steps aside.

## Privacy

It is an interface tweak only. It reads the git remote and branch of the
current folder to draw the line, and it makes no network requests and does not
send anything anywhere.

## Install

At the prompt of a terminal session:

```
/plugin install repo-branch-band --marketplace svilotti-od/oily-dodo-claude-mods
```

From a shell:

```bash
claude plugin install repo-branch-band --marketplace svilotti-od/oily-dodo-claude-mods
```

In the desktop app: click **+** next to the prompt box, then **Plugins**,
**Add marketplace** with `svilotti-od/oily-dodo-claude-mods`, then **Add plugin**.

Start a new session afterwards to see the line.

## Customizing

Everything lives in `hooks/register.tsx`:

- **Wording and style:** the `<Text>` elements near the bottom (`italic`,
  `dimColor` and `size="footnote"`).
- **Remote shortening:** the `shortRemote` function at the top.
- **The "none" request:** the `text` passed to `$.prompt.fill`.

## License

[MIT](LICENSE)
