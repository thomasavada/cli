export const configurationFileNames = {
  hydrogen: 'hydrogen.config',
} as const

export const supportedConfigExtensions = ['ts', 'js', 'mjs', 'cjs', 'json']

export const dotEnvFileNames = {
  production: '.env',
}

export const genericConfigurationFileNames = {
  tailwind: 'tailwind.config',
  postCSS: 'postcss.config',
  eslint: 'eslint.config',
  typescript: {
    config: 'tsconfig.json',
  },
  yarn: {
    lockfile: 'yarn.lock',
  },
  pnpm: {
    lockfile: 'pnpm-lock.yaml',
  },
} as const
