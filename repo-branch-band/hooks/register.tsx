import type { Register } from 'claude-code'

// "git@github.com:owner/name.git" or "https://github.com/owner/name.git" -> "owner/name"
const shortRemote = (remote: string): string => {
  const cleaned = remote.trim().replace(/\.git$/, '').replace(/\/+$/, '')
  const match = cleaned.match(/[:/]([^/:]+\/[^/:]+)$/)

  return match?.[1] ?? cleaned
}

export const register: Register = on => {
  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    if (e.props.hasSurvey) {
      return next(e)
    }

    const copy = await $.vcs.detect({ path: '.' }).catch(() => null)
    const repo = copy?.remote ? shortRemote(copy.remote) : null
    const branch = copy?.branch ?? null

    if (!repo && !branch) {
      return next(e)
    }

    const { Box, Button, Text } = $.ui.resolve(e)
    const place = branch ?? 'detached'
    const folder = copy?.root.split('/').filter(Boolean).pop() ?? 'unknown'

    if (repo) {
      return (
        <Text italic dimColor size="footnote">
          {`local: ${folder} · remote: ${repo} · ${place}`}
        </Text>
      )
    }

    // No remote: "none" is a button that drops a request into the prompt box
    // (appended, so a draft is kept) for the person to review and send.
    return (
      <Box>
        <Text italic dimColor size="footnote">
          {`local: ${folder} · remote: `}
        </Text>
        <Button
          key="connect"
          onPress={() =>
            $.prompt.fill({
              text: 'Help me connect this project to a remote GitHub repository.',
              mode: 'append',
            })
          }
        >
          <Text italic size="footnote">
            none
          </Text>
        </Button>
        <Text italic dimColor size="footnote">
          {` · ${place}`}
        </Text>
      </Box>
    )
  })
}
