import type { Register } from 'claude-code'

// "git@github.com:owner/name.git" or "https://github.com/owner/name.git" -> "owner/name"
const shortRemote = (remote: string): string => {
  const cleaned = remote.trim().replace(/\.git$/, '').replace(/\/+$/, '')
  const match = cleaned.match(/[:/]([^/:]+\/[^/:]+)$/)

  return match ? match[1] : cleaned
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

    const { Box, Text } = $.ui.resolve(e)

    return (
      <Box>
        <Text dimColor>{repo ?? 'no remote'}</Text>
        <Text dimColor>{' · '}</Text>
        <Text bold>{branch ?? 'detached'}</Text>
      </Box>
    )
  })
}
