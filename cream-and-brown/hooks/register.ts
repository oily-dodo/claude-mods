import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Cream by day, dark brown by night. Both are warm, tinted grays: each surface sits a few percent
// of lightness from its neighbour, so a card reads as paper on paper (light) or wood on wood (dark).
const { theme, problems } = makeColors({
  label: 'Cream and brown',
  // Roles keep their meaning (red for danger, green for success, amber for warning); the accent is copper brown.
  roles: { accent: '#9a5f2c', danger: '#b3392f', success: '#4e7d3a', warning: '#a86f14', pro: '#6d4f94' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#f4ead3', // the page: cream
        'surface-1': '#f9f1de', // cards
        'surface-2': '#fcf7ea', // panels
        'surface-3': '#fcf7ea', // menus (must match surface-2 in light mode)
        'text-primary': '#2e2218', // deep brown
        'text-secondary': '#574738',
        'text-muted': '#6c5b49',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#271a11', // the page: dark brown
        'surface-1': '#2d1f16', // cards
        'surface-2': '#32231a', // panels
        'surface-3': '#36271d', // menus, kept close to surface-0 so green and muted text stay readable
        'text-primary': '#f6ecda', // warm cream
        'text-secondary': '#d8cab3',
        'text-muted': '#b8a78f',
      },
    },
  },
})

const LOOK: ThemeSetArgs = { colors: theme }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    // The one contrast line that would make Desktop ignore the whole theme, if any.
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })
}
