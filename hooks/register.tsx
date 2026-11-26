import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Warm parchment by day, ember-lit umber by night.
const { theme, problems } = makeColors({
  label: 'Fall leaves',
  roles: { accent: '#a8431c', danger: '#a62b2b', success: '#58702b', warning: '#a86a0f', pro: '#7a4a6b' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#f1e1c6',
        'surface-1': '#f6ead3',
        'surface-2': '#fbf3e3',
        'text-primary': '#2e1f14',
        'text-secondary': '#5a4332',
        'text-muted': '#6e5744',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#1d1410',
        'surface-1': '#271a14',
        'surface-2': '#31221a',
        'surface-3': '#35261c',
        'text-primary': '#f3e4cc',
        'text-secondary': '#d3bfa3',
        'text-muted': '#b09a80',
      },
    },
  },
})

const LEAF_COLORS = ['#c8501e', '#e08a1e', '#b8322a', '#d9a21b', '#8c3b1a', '#a85a1f']

// A leaf centred on 0,0 so it turns about its middle.
const LEAF = 'M0 -14C10 -10 12 4 0 16C-12 4 -10 -10 0 -14Z'
const VEIN = 'M0 -12V15'

// A small repeatable sequence stands in for random, so a reload draws the same scene.
function pick(i: number, salt: number): number {
  return ((i * 7919 + salt * 104729) % 1000) / 1000
}

function buildScene(): string {
  const leaves: string[] = []
  const count = 22

  for (let i = 0; i < count; i += 1) {
    // Most leaves fall down the left edge, a few drift further in.
    const isStray = i % 6 === 5
    const x = isStray ? 300 + pick(i, 1) * 250 : 10 + pick(i, 1) * 240
    const y = 40 + pick(i, 2) * 620
    const scale = 0.8 + pick(i, 3) * 1.1
    const color = LEAF_COLORS[i % LEAF_COLORS.length]
    const duration = (16 + pick(i, 4) * 14) * 1.25
    const delay = -pick(i, 5) * duration
    const sway = (pick(i, 6) - 0.5) * 120
    const spin = (pick(i, 7) > 0.5 ? 1 : -1) * (180 + pick(i, 8) * 300)
    const tilt = Math.round(pick(i, 9) * 360)

    leaves.push(
      `<g transform="translate(${x.toFixed(0)} ${y.toFixed(0)}) scale(${scale.toFixed(2)}) rotate(${tilt})">` +
        `<g class="fall" style="--dx:${sway.toFixed(0)}px;--spin:${spin.toFixed(0)}deg;animation-duration:${duration.toFixed(1)}s;animation-delay:${delay.toFixed(1)}s">` +
        `<path d="${LEAF}" fill="${color}" opacity="0.88"/>` +
        `<path d="${VEIN}" stroke="#3b1c0c" stroke-width="1" opacity="0.35" fill="none"/>` +
        `</g></g>`
    )
  }

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice">` +
    `<style>` +
    `.top{stop-color:#f2c98a}.bot{stop-color:#e9a45e}` +
    `@media (prefers-color-scheme: dark){.top{stop-color:#2a1812}.bot{stop-color:#4a2412}}` +
    `.fall{animation-name:fall;animation-timing-function:linear;animation-iteration-count:infinite}` +
    `@keyframes fall{from{transform:translate(0,-140px) rotate(0deg)}50%{transform:translate(var(--dx),330px) rotate(calc(var(--spin) / 2))}to{transform:translate(0,820px) rotate(var(--spin))}}` +
    `</style>` +
    `<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">` +
    `<stop class="top" offset="0"/><stop class="bot" offset="1"/>` +
    `</linearGradient></defs>` +
    `<rect width="1000" height="700" fill="url(#sky)"/>` +
    leaves.join('') +
    `</svg>`
  )
}

const SCENE = buildScene()

const LOOK: ThemeSetArgs = {
  colors: theme,
  backdrop: { scene: 'fall-leaves', glass: { blur: 10, opacity: 0.5 } },
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
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

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }

    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="Autumn leaves drifting down" isInteractive={false} />
  })
}
